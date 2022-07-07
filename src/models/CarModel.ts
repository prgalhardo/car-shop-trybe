import { model as createModel, Schema, Document } from 'mongoose';
import { Car } from '../interfaces/CarInterface';
import GenericModel from './GenericModel';

interface CarDocument extends Car, Document { }

const carSchema = new Schema<CarDocument>({
  model: String,
  year: Number,
  status: Boolean,
  buyValue: Number,
  doorsQty: Number,
  seatsQty: Number,
});

class CarModel extends GenericModel<Car> {
  constructor(model = createModel('Car', carSchema)) {
    super(model);
  }
}

export default CarModel;