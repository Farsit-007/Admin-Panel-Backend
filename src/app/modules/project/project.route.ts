import express from 'express';
import { validation } from '../../middleware/validation';
import { auth } from '../../middleware/auth';
import { USER_ROLE } from '../user/user.constant';
import { projectValidation } from './project.zod.validation';
import { projectController } from './project.controller';

const router = express.Router();
//Project Create
router.post(
  '/',
  validation(projectValidation.projectValidationSchema),
  auth(USER_ROLE.admin),
  projectController.createProject,
);
//All Project
router.get('/', projectController.AllProject);

//All Project
router.get('/feature', projectController.featuredProject);
//Project Update
router.patch(
  '/:id',
  validation(projectValidation.updateProjectValidationSchema),
  auth(USER_ROLE.admin),
  projectController.updateProjecte,
);

// Delete Project
router.delete('/:id', auth(USER_ROLE.admin), projectController.deleteProject);

//Peoject Details
router.get('/:id', projectController.getSingleProject);

export const ProjectRoutes = router;
