import { expect } from 'chai';
import sinon, { SinonStub } from 'sinon';
import CarService from '../../../services/CarService';
import { Model } from 'mongoose';
import { car, listOfCars } from '../mocks/CarMocks';


describe('Car Service Tests', () => {
  describe('Create Car', () => {
    before(() => {
      sinon.stub(Model, 'create').resolves(car);
    });
    after(() => {
      (Model.create as SinonStub).restore;
    });

    it('Create is a success', async () => {
      const carService = new CarService();
      const createdNewCar = await carService.create(car);

      expect(createdNewCar).to.be.deep.equal(car);
    });
  });

  describe('Read All Cars', () => {
    before(() => {
      sinon.stub(Model, 'find').resolves(listOfCars);
    });
    after(() => {
      (Model.find as SinonStub).restore();
    });

    it('Returns an array of cars', async () => {
      const carService = new CarService();
      const arrayOfCars = await carService.read();

      expect(arrayOfCars).to.be.deep.equal(listOfCars);
    });
  });

  describe('Read One Car', () => {
    before(() => {
      sinon.stub(Model, 'findOne').resolves(car);
    });
    after(() => {
      (Model.findOne as SinonStub).restore();
    });

    it('Returns an object', async () => {
      const carService = new CarService();
      const findCarById = await carService.readOne('62ccab7b2884b5398b471c41');

      expect(findCarById).to.be.deep.equal(car);
    });
  });

  describe('Update a Car', () => {
    before(() => {
      sinon.stub(Model, 'findOneAndUpdate').resolves(car);
    });
    after(() => {
      (Model.findOneAndUpdate as SinonStub).restore();
    });

    it('Returns an object', async () => {
      const carService = new CarService();
      const findCarById = await carService.update('62ccab7b2884b5398b471c41', car);

      expect(findCarById).to.be.deep.equal(car);
    });
  });
});