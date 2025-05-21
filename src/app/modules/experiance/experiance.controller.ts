import { catchAsync } from '../../utils/catchAsync';
import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';
import { ExperianceServices } from './experiance.service';

const createExperiance = catchAsync(async (req, res) => {
  const result = await ExperianceServices.createExperianceIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: ' Experiance created successfully',
    data: result,
  });
});


const getAllExperiance = catchAsync(async (req, res) => {
  const result = await ExperianceServices.getAllExperiance();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Experiance Retrieved successfully',
    data: result
  });
});


const deleteExperiance = catchAsync(async (req, res) => {
 await ExperianceServices.deleteExperiance(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Experiance Deleted successfully',
    data: [],
  });
});


export const ExperianceController = {
  createExperiance,
  getAllExperiance,
  deleteExperiance
};
