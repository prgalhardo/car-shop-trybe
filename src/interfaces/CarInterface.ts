import { z } from 'zod';
import { Vehicle, VehicleSchema } from './VehicleInterface';

export const CarSchema = z.object({
  doorsQty: z.number({
    invalid_type_error: 'doorsQty must be a number',
  }).gte(2).lte(4),
  seatsQty: z.number({
    invalid_type_error: 'seatsQty must be a number',
  }).gte(2).lte(7),
});

export const VehicleAndCarSchema = CarSchema.merge(VehicleSchema);
  
export type Car = z.infer<typeof VehicleAndCarSchema> & Vehicle;