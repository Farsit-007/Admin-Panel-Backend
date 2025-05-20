import { z } from 'zod';

const blogValidationSchema = z.object({
  body: z.object({
    title: z.string({ required_error: 'Please provide a title' }),
    description: z.string({ required_error: 'Please provide a description' }),
    imageUrl: z.string({ required_error: 'Please provide a images' }),
  }),
});

const updateBlogValidationSchema = z.object({
  body: z.object({
    title: z.string({ required_error: 'Please provide a title' }).optional(),
    description: z
      .string({ required_error: 'Please provide a description' })
      .optional(),
    imageUrl: z
      .string({ required_error: 'Please provide a images' })
      .optional(),
  }),
});

export const blogValidation = {
  updateBlogValidationSchema,
  blogValidationSchema,
};
