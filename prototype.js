//Using Object.create():
// Define a base object for all automobiles
const automobile = {
  startEngine() {
    console.log("Engine started.");
  },
  stopEngine() {
    console.log("Engine stopped.");
  },
};

// Create a four-wheeler prototype by inheriting from the automobile object
const fourWheeler = Object.create(automobile);

// Define properties and methods specific to four-wheelers
fourWheeler.numWheels = 4;
fourWheeler.drive = function () {
  console.log("Four-wheeler is driving.");
};

// Create instances of four-wheelers
const car = Object.create(fourWheeler);
const SUV = Object.create(fourWheeler);

// Access inherited and specific properties/methods
car.startEngine();
car.drive();
console.log(`Number of wheels: ${car.numWheels}`);

SUV.startEngine();
SUV.drive();
console.log(`Number of wheels: ${SUV.numWheels}`);
//====================================================================
//Using Constructor Functions:
// Define a constructor function for the base automobile
function Automobile() {}

Automobile.prototype.startEngine = function () {
  console.log("Engine started.");
};

Automobile.prototype.stopEngine = function () {
  console.log("Engine stopped.");
};

// Define a constructor function for four-wheelers inheriting from Automobile
function FourWheeler() {
  this.numWheels = 4;
}

// Set up the prototype chain
FourWheeler.prototype = Object.create(Automobile.prototype);
FourWheeler.prototype.constructor = FourWheeler;

// Define a method specific to four-wheelers
FourWheeler.prototype.drive = function () {
  console.log("Four-wheeler is driving.");
};

// Create instances of four-wheelers
const car = new FourWheeler();
const SUV = new FourWheeler();

// Access inherited and specific properties/methods
car.startEngine();
car.drive();
console.log(`Number of wheels: ${car.numWheels}`);

SUV.startEngine();
SUV.drive();
console.log(`Number of wheels: ${SUV.numWheels}`);








