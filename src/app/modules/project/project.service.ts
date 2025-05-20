/* eslint-disable @typescript-eslint/no-explicit-any */
import AppError from '../../Errors/AppError';
import httpStatus from 'http-status';
import { Project } from './project.model';
import { TProject } from './project.interface';

const createProjectIntoDB = async (payload: TProject) => {
  const result = await Project.create(payload);
  return result;
};

const updateProjectIntoDB = async (id: string, payload: Partial<TProject>) => {
  const isProjectEsists = await Project.findById(id);
  if (!isProjectEsists) {
    throw new AppError(httpStatus.NOT_FOUND, 'This project is not found');
  }
  const result = await Project.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const getAllProjects = async () => {
  const result = await Project.find()
    .populate({
      path: 'tech',
    })
    .lean();
  return result;
};

const getFeatureProjects = async () => {
  const result = await Project.find()
    .sort({ createdAt: -1 })
    .limit(4)
    .populate({
      path: 'tech',
    })
    .lean();
  return result;
};

const deleteProject = async (id: string) => {
  const result = await Project.findByIdAndDelete(id);
  return result;
};

const getSingleProject = async (id: string) => {
  const result = await Project.findById(id).populate({
      path: 'tech',
    })
    .lean();;
  return result;
};

export const ProjectServices = {
  createProjectIntoDB,
  updateProjectIntoDB,
  deleteProject,
  getSingleProject,
  getAllProjects,
  getFeatureProjects,
};
