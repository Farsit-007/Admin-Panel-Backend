import { z } from 'zod';

const projectValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'Please provide a Name' }),
    description: z.string({ required_error: 'Please provide a description' }),
    liveUrl: z.string({ required_error: 'Please provide a live url' }),
    githubUrl: z.string({ required_error: 'Please provide a github url' }),
    features :  z.array(z.string({ required_error: 'Please provide a features' })),
    imageUrl: z.array(z.string({ required_error: 'Please provide a images' })),
    tech : z.array(z.string({ required_error: 'Please provide a tech' })),
  }),
});


const updateProjectValidationSchema = z.object({
   body: z.object({
    name: z.string({ required_error: 'Please provide a Name' }).optional(),
    description: z.string({ required_error: 'Please provide a description' }).optional(),
    features :  z.array(z.string({ required_error: 'Please provide a features' })).optional(),
    imageUrl: z.array(z.string({ required_error: 'Please provide a images' })).optional(),
    tech : z.array(z.string({ required_error: 'Please provide a tech' })).optional(), 
     liveUrl: z.string({ required_error: 'Please provide a live url' }).optional(),
    githubUrl: z.string({ required_error: 'Please provide a github url' }).optional(),
  }),
});

export const projectValidation = {
  projectValidationSchema,
  updateProjectValidationSchema
};
