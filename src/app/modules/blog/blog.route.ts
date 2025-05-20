import express from 'express';
import { validation } from '../../middleware/validation';
import { auth } from '../../middleware/auth';
import { USER_ROLE } from '../user/user.constant';
import { BlogController } from './blog.controller';
import { blogValidation } from './blog.zod.validation';

const router = express.Router();
//Blogs Create
router.post(
  '/',
  validation(blogValidation.blogValidationSchema),
  auth(USER_ROLE.admin),
  BlogController.createBlog,
);
//All Blogs
router.get('/', BlogController.getAllBlog);
router.get('/features', BlogController.getFeaturedBlog);

//Blogs Update
router.patch(
  '/:id',
  validation(blogValidation.updateBlogValidationSchema),
  auth(USER_ROLE.admin),
  BlogController.updateListingBlog,
);

// Delete Blogs
router.delete(
  '/:id',
  auth( USER_ROLE.admin),
  BlogController.deleteBlog,
);

//Peoject Details
router.get(
  '/:id',
  BlogController.getSingleBlog,
);

export const blogRoutes = router;
