import { Model as M, Document, Types } from 'mongoose';
import { Model } from '../interfaces/ModelInterface';

abstract class GenericModel<T> implements Model<T> {
  constructor(protected model: M<T & Document>) { }
  
  async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }

  async read(): Promise<T[]> {
    return this.model.find();
  }

  async readOne(id: string): Promise<T | null> {
    if (!Types.ObjectId.isValid(id)) return null;
    return this.model.findOne({ id_: id });
  }
  
  async update(id: string, obj: T): Promise<T | null> {
    if (!Types.ObjectId.isValid(id)) return null;
    return this.model
      .findOneAndUpdate({ id_: id }, obj, { returnOriginal: false });
  }

  async delete(id: string): Promise<T | null> {
    if (!Types.ObjectId.isValid(id)) return null;
    return this.model.findOneAndDelete({ id_: id });
  }
}

export default GenericModel;