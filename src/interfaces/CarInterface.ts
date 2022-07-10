import { z } from 'zod';
import { Vehicle, VehicleSchema } from './VehicleInterface';

export const CarSchema = z.object({
  doorsQty: z.number({
    required_error: 'doorsQty is required',
    invalid_type_error: 'doorsQty must be a number',
  }).gte(2, { 
    message: 'doorsQty must be between 2 and 4',
  }).lte(4, { 
    message: 'doorsQty must be between 2 and 4',
  }),
  seatsQty: z.number({
    required_error: 'seatsQty is required',
    invalid_type_error: 'seatsQty must be a number',
  }).gte(2, {
    message: 'seatsQty must be between 2 and 7',
  }).lte(7, {
    message: 'seatsQty must be between 2 and 7',
  }),
});

export const VehicleAndCarSchema = CarSchema.merge(VehicleSchema);
  
export type Car = z.infer<typeof VehicleAndCarSchema> & Vehicle;