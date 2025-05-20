import { z } from 'zod';
import { Role } from './user.constant';

export const userValidationSchema = z.object({
  body: z.object({
    email: z
      .string({ required_error: 'Please provide a Email' })
      .email('Please provide a valid Email'),
    password: z.string({ required_error: 'Please provide a password' }),
    role: z.enum([...Role] as [string, ...string[]]),
  }),
});

