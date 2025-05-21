import { TExperiance } from './experiance.interface';
import { Experiance } from './experiance.model';

const createExperianceIntoDB = async (payload: TExperiance) => {
  const result = await Experiance.create(payload);
  return result;
};

const getAllExperiance= async () => {
  const result = await Experiance.find().sort({ createdAt: -1 });
  return result;
};

const deleteExperiance = async (id: string) => {
  const result = await Experiance.findByIdAndDelete(id);
  return result;
};

export const ExperianceServices = {
  createExperianceIntoDB,
  getAllExperiance,
  deleteExperiance
};
