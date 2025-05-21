import { z } from 'zod';

const ExperianceValidationSchema = z.object({
  body: z.object({
    designation: z.string({ required_error: 'Please provide a designation' }),
    date: z.string({ required_error: 'Please provide a date' }),
    description: z.string({ required_error: 'Please provide a description' }),
  }),
});

export const ExperianceValidation = {
  ExperianceValidationSchema,
};
