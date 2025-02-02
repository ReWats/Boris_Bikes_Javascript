const Bike = require('./boris-bikes'); 
const DockingStation = require('./DockingStation'); 
const Payment = require('./Payment');
//const Person = require('./main'); 

describe('Bike', () => {
    it('should be working by default', () => {
      const bike = new Bike();
      expect(bike.isWorking).toBe(true);
    });
  
    it('should allow a bike to be marked as broken', () => {
      const bike = new Bike();
      bike.breakBike();
      expect(bike.isWorking).toBe(false);
    });
  
    it('should allow a bike to be repaired', () => {
      const bike = new Bike();
      bike.breakBike();
      bike.repairBike();
      expect(bike.isWorking).toBe(true);
    });

    it('should show bike as available or hired', () => {
      const bike = new Bike();
      bike.hire();
      bike.return();
      expect(bike.status).toBe('Available') || ('Hired');
    });
  });

describe('DockingStation', () => {
  it('should have bikes available', () => {
    const dockingStation = new DockingStation();
    expect(dockingStation.bikeAvailable).toBe(true);
  });

  it('should have capacity of 5 bikes', () => {
    const dockingStation = new DockingStation();
    expect(dockingStation.bikeCapacity).toBe(5);
  });
  
});

describe('Payment', () => {
  it('should charge £5 per hour for adults', () => {
    const payment = new Payment();
    /*const hourlyRate = (5);
    const rentalHours = (1);
    const age = (25);
    payment.calculateCost(hourlyRate, rentalHours, age);*/
    expect(payment.defaultCost).toBe("5");
  });
});
