import express from 'express';
import { validation } from '../../middleware/validation';
import { auth } from '../../middleware/auth';
import { USER_ROLE } from '../user/user.constant';
import { SkillValidation } from './skill.zod.validation';
import { SkillController } from './skill.controller';

const router = express.Router();
//Skills Create
router.post(
  '/',
  validation(SkillValidation.SkillValidationSchema),
  auth(USER_ROLE.admin),
  SkillController.createSkill,
);
//All Skills
router.get('/', SkillController.getAllSkill);

// Delete Skills
router.delete(
  '/:id',
  auth( USER_ROLE.admin),
  SkillController.deleteSkill,
);


export const SkillRoutes = router;
