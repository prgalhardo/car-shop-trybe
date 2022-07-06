import { z } from 'zod';

export const VehicleSchema = z.object({
  model: z.string({
    invalid_type_error: 'Model must be a string',
  }).min(3, { message: 'Model must be 3 or more characters long' }),
  year: z.number({
    invalid_type_error: 'Year must be a number',
  }).gte(1900).lte(2022),
  color: z.string({
    invalid_type_error: 'Color must be a string',
  }).min(3, { message: 'Color must be 3 or more characters long' }),
  status: z.optional(z.boolean()),
  buyValue: z.number({
    invalid_type_error: 'buyValue must be a number',
  }).int(),
});

export type Vehicle = z.infer<typeof VehicleSchema>;
