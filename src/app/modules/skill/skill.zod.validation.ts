import { z } from 'zod';

const SkillValidationSchema = z.object({
  body: z.object({
    title: z.string({ required_error: 'Please provide a title' }),
    color: z.string({ required_error: 'Please provide a description' }),
    imageUrl: z.string({ required_error: 'Please provide a images' }),
  }),
});

const updateSkillValidationSchema = z.object({
   body: z.object({
    title: z.string({ required_error: 'Please provide a title' }).optional(),
    color: z.string({ required_error: 'Please provide a description' }).optional(),
    imageUrl: z.string({ required_error: 'Please provide a images' }).optional(),
  }),
});

export const SkillValidation = {
  updateSkillValidationSchema,
  SkillValidationSchema,
};
