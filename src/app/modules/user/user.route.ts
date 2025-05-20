import express from 'express';
import { validation } from '../../middleware/validation';
import {
  userValidationSchema,
} from './user.zod.validation';
import { UserController } from './user.controller';

const router = express.Router();
router.post('/', validation(userValidationSchema), UserController.createUser);



export const UserRoutes = router;
