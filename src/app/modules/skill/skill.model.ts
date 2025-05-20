import { model, Schema } from 'mongoose';
import { TSkill } from './skill.interface';

const skillSchema = new Schema<TSkill>(
  {
    title: {
      type: String,
      required: [true, 'title is required'],
    }, 
    color: {
      type: String,
      required: [true, 'Color is required'],
    },
    imageUrl: {
      type: String,
      required: [true, 'Image Url is required'],
    },
  },
  {
    timestamps: true,
  },
);

export const Skill = model<TSkill>('SKill', skillSchema);
