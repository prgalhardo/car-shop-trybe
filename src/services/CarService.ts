import { Car, VehicleAndCarSchema } from '../interfaces/CarInterface';
import GenericService, { ServiceError } from './GenericService';
import CarModel from '../models/CarModel';

class CarService extends GenericService<Car> {
  constructor(model = new CarModel()) {
    super(model);
  }

  async create(obj: Car): Promise<Car | ServiceError> {
    const parsed = VehicleAndCarSchema.safeParse(obj);
    if (!parsed.success) {
      return { error: parsed.error };
    }
    return this.model.create(obj);
  }

  async update(id: string, obj: Car)
    :Promise<Car | ServiceError | null> {
    const parsed = VehicleAndCarSchema.safeParse(obj);
    if (!parsed.success) {
      return { error: parsed.error };
    }
    return this.model.update(id, obj);
  }

  async delete(id: string): Promise<Car | null> {
    const deletedCar = await this.model.delete(id);
    return deletedCar;
  }
}

export default CarService;