import { catchAsync } from '../../utils/catchAsync';
import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';
import { ProjectServices } from './project.service';

const createProject = catchAsync(async (req, res) => {
  const result = await ProjectServices.createProjectIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Projects created successfully',
    data: result,
  });
});

const updateProjecte = catchAsync(async (req, res) => {
  const result = await ProjectServices.updateProjectIntoDB(
    req.params.id,
    req.body,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Projects Updated successfully',
    data: result,
  });
});

const deleteProject = catchAsync(async (req, res) => {
  await ProjectServices.deleteProject(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project Deleted successfully',
    data: [],
  });
});

const AllProject = catchAsync(async (req, res) => {
  const result = await ProjectServices.getAllProjects();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Projects Retrieved successfully',
    data: result,
  });
});

const featuredProject = catchAsync(async (req, res) => {
  const result = await ProjectServices.getFeatureProjects();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Projects Retrieved successfully',
    data: result,
  });
});

const getSingleProject = catchAsync(async (req, res) => {
  const result = await ProjectServices.getSingleProject(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Projects Retrieved successfully',
    data: result,
  });
});

export const projectController = {
  createProject,
  updateProjecte,
  deleteProject,
  getSingleProject,
  AllProject,
  featuredProject,
};
