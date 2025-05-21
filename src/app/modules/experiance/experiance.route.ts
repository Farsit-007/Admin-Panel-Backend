import express from 'express';
import { validation } from '../../middleware/validation';
import { auth } from '../../middleware/auth';
import { USER_ROLE } from '../user/user.constant';
import { ExperianceValidation } from './experiance.zod.validation';
import { ExperianceController } from './experiance.controller';

const router = express.Router();
//Skills Create
router.post(
  '/',
  validation(ExperianceValidation.ExperianceValidationSchema),
  auth(USER_ROLE.admin),
  ExperianceController.createExperiance,
);
//All Skills
router.get('/', ExperianceController.getAllExperiance);

// Delete Skills
router.delete(
  '/:id',
  auth( USER_ROLE.admin),
  ExperianceController.deleteExperiance,
);


export const ExperianceRoutes = router;
