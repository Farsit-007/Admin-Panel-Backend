import { model, Schema } from 'mongoose';
import { TProject } from './project.interface';
import { Status } from './project.constant';

const projectSchema = new Schema<TProject>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    liveUrl: {
      type: String,
      required: [true, 'Live url is required'],
    },
    githubUrl: {
      type: String,
      required: [true, 'Github url is required'],
    },
    features: {
      type: [String],
      required: [true, 'Features is required'],
    },
    imageUrl: {
      type: [String],
      required: [true, 'Image Url is required'],
    },
    tech: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: 'SKill',
        },
      ],
      required: [true, 'Tech Url is required'],
    },
    status: {
      type: String,
      enum: Status,
      default: 'PUBLISH',
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Project = model<TProject>('Project', projectSchema);
