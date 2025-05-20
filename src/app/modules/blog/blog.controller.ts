import { catchAsync } from '../../utils/catchAsync';
import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';
import { BlogServices } from './blog.service';

const createBlog = catchAsync(async (req, res) => {
  const result = await BlogServices.createBlogIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: ' Blog created successfully',
    data: result,
  });
});


const getAllBlog = catchAsync(async (req, res) => {
  const result = await BlogServices.getAllBlogs();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Blog Retrieved successfully',
    data: result
  });
});

const getFeaturedBlog = catchAsync(async (req, res) => {
  const result = await BlogServices.getFeatureBlogs();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Blog Retrieved successfully',
    data: result
  });
});

const updateListingBlog = catchAsync(async (req, res) => {
  const result = await BlogServices.updateBlogIntoDB(req.params.id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Blog Updated successfully',
    data: result,
  });
});

const deleteBlog = catchAsync(async (req, res) => {
 await BlogServices.deleteBlog(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Blog Deleted successfully',
    data: [],
  });
});

const getSingleBlog = catchAsync(async (req, res) => {

  const result = await BlogServices.getSingleBlog(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Blog Retrieved successfully',
    data: result,
  });
});




export const BlogController = {
  createBlog,
  getAllBlog,
  updateListingBlog,
  deleteBlog,
  getSingleBlog,
  getFeaturedBlog
};
