import { expect } from 'chai';
import sinon, { SinonStub } from 'sinon';
import CarModel from '../../../models/CarModel';
import { Model } from 'mongoose';
import { newCar } from '../mocks/CarMocks';

describe('Car Model Tests', () => {
  describe('Create Car', () => {
    before(() => {
      sinon.stub(Model, 'create').resolves(newCar);
    });
    after(() => {
      (Model.create as SinonStub).restore();
    });

    it('Create is a success', async () => {
      const carModel = new CarModel(Model);
      const createdCar = await carModel.create(newCar);

      expect(createdCar).to.be.deep.equal(newCar);
    });
  });
});