class DockingStation {
    constructor() {
      this.bikeAvailable = true;
      this.bikeCapacity = (5);
    }

    addBike(bike) {
      if (!(bike instanceof Bike)) {
        return Error('Only bikes can be added');
      }
      this.bikes.push(bike);
    }

    hireBike() {
      const bikeAvailable = this.bikes.find(bike => bike.status === 'available');
      if (bikeAvailable) {
        bikeavailable.rent();
        return bikeAvailable;
      } else {
        return Error('No bikes available at this station');
      }
    }

    returnBike(bike) {
      if (bike.status === 'rented') {
        bike.return();
        this.bikes.push(bike);
      } else {
        throw new Error('Bike must be rented before it can be returned');
      }
    }

  }

  module.exports = DockingStation;
