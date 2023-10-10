// Vehicle constructor function
function Vehicle(brand, model, speed, fuelType) {
  this.brand = brand;
  this.model = model;
  this.speed = speed || 0;
  this.fuelType = fuelType;
}

// Vehicle prototype methods
Vehicle.prototype.accelerate = function (increment) {
  this.speed += increment;
};

Vehicle.prototype.brake = function (decrement) {
  this.speed -= decrement;
};

Vehicle.prototype.refuel = function () {
  console.log(`${this.brand} ${this.model} is refueling.`);
};

// Car constructor function that inherits from Vehicle
function Car(brand, model, speed, fuelType, numberOfWheels) {
  Vehicle.call(this, brand, model, speed, fuelType);
  this.numberOfWheels = numberOfWheels;
}

// Inherit methods from Vehicle prototype
Car.prototype = Object.create(Vehicle.prototype);

// Add an additional method for Car
Car.prototype.honk = function () {
  console.log(`${this.brand} ${this.model} is honking.`);
};

// Airplane constructor function that inherits from Vehicle
function Airplane(brand, model, speed, fuelType, numberOfEngines, hasLandingGear) {
  Vehicle.call(this, brand, model, speed, fuelType);
  this.numberOfEngines = numberOfEngines;
  this.hasLandingGear = hasLandingGear;
}

// Inherit methods from Vehicle prototype
Airplane.prototype = Object.create(Vehicle.prototype);

// Add an additional method for Airplane
Airplane.prototype.takeOff = function () {
  console.log(`${this.brand} ${this.model} is taking off.`);
};

// Create instances of Car and Airplane
const myCar = new Car('Toyota', 'Camry', 0, 'Gasoline', 4);
const myAirplane = new Airplane('Boeing', '747', 0, 'Jet Fuel', 4, true);

// Demonstrate invoking methods on Car and Airplane
myCar.accelerate(20);
myCar.honk();
myCar.refuel();

myAirplane.accelerate(200);
myAirplane.takeOff();
myAirplane.refuel();
