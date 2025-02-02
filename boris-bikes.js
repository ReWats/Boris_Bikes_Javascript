//We need to know basic information about each bike like does it work. Here we will use the isWorking property to show the status of the bike. Create bike class. Class is a special function, a template for creating objects
class Bike { 
    constructor() { //Constructor is a special method for creating and initialising an object within a a class, a class cannot have more than 1 constructor method
      this.isWorking = true; //All bike set to working as default
    }
  
    breakBike() { //This method is able to change the property; isWorking to FALSE
      this.isWorking = false;
    }
  
    repairBike() { // This method changes the property back to TRUE
      this.isWorking = true;
    }

    available() {
      this.status = 'Available'; // Initially, bikes are available
    }

    hire() {
      if (this.status = 'Available') { //If bike available, change status to hired
        this.status = 'Hired';
      } else {
        return Error('Bike is already hired'); //else return error: biked already hired (can't be hired)
      }
    }

    return() {
      if (this.status = 'Hired') { //If bike status is hired, change status to available
        this.status = 'Available';
      } else {
        return Error('Bike was not hired'); //else return error: Bike was not hired (can't be returned)
      }
    }
  }
  
  module.exports = Bike; //exports data to our test

 
