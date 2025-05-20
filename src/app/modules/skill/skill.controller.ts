import { catchAsync } from '../../utils/catchAsync';
import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';
import { SkillServices } from './skill.service';

const createSkill = catchAsync(async (req, res) => {
  const result = await SkillServices.createSkillIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: ' Skill created successfully',
    data: result,
  });
});


const getAllSkill = catchAsync(async (req, res) => {
  const result = await SkillServices.getAllSkills();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Skill Retrieved successfully',
    data: result
  });
});


const deleteSkill = catchAsync(async (req, res) => {
 await SkillServices.deleteSkill(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Skill Deleted successfully',
    data: [],
  });
});


export const SkillController = {
  createSkill,
  getAllSkill,
  deleteSkill
};
