import { model, Schema } from 'mongoose';
import { TExperiance } from './experiance.interface';

const skillSchema = new Schema<TExperiance>(
  {
    designation: {
      type: String,
      required: [true, 'designation is required'],
    }, 
    date: {
      type: String,
      required: [true, 'date is required'],
    },
    description: {
      type: String,
      required: [true, 'description Url is required'],
    },
  },
  {
    timestamps: true,
  },
);

export const Experiance = model<TExperiance>('Experiance', skillSchema);
