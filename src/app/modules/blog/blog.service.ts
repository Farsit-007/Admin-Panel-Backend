
import AppError from '../../Errors/AppError';
import { TBlog } from './blog.interface';
import { Blog } from './blog.model';
import httpStatus from 'http-status';

const createBlogIntoDB = async (payload: TBlog) => {
  const result = await Blog.create(payload);
  return result;
};

const updateBlogIntoDB = async (id: string, payload: Partial<TBlog>) => {
  const isBlogEsists = await Blog.findById(id);
  if (!isBlogEsists) {
    throw new AppError(httpStatus.NOT_FOUND, 'This Blog is not found');
  }
  const result = await Blog.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const getAllBlogs = async () => {
  const result = await Blog.find();
  return result;
};

const getFeatureBlogs = async () => {
  const result = await Blog.find().sort({ createdAt: -1 }).limit(4);
  return result;
};

const deleteBlog = async (id: string) => {
  const result = await Blog.findByIdAndDelete(id);
  return result;
};

const getSingleBlog = async (id: string) => {
  const result = await Blog.findById(id);
  return result;
};

export const BlogServices = {
  createBlogIntoDB,
  updateBlogIntoDB,
  deleteBlog,
  getSingleBlog,
  getAllBlogs,
  getFeatureBlogs,
};
