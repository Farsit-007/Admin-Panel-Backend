import { Schema } from 'mongoose';

export type TStatus = "PUBLISH" | "UNPUBLISH"

export interface TProject {
  name: string;
  description: string;
  features: string[];
  imageUrl: string[];
  tech: Schema.Types.ObjectId[];
  status: TStatus;
  liveUrl : string;
  githubUrl : string;
}
