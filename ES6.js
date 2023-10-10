// Normal function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;

//======================

const name = "John";
const greeting = `Hello, ${name}!`;
//=========
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}
//===========
const fruits = ['apple', 'banana', 'cherry'];
for (const fruit of fruits) {
  console.log(fruit);
}
//============
const person = { name: 'Alice', age: 30 };
const { name, age } = person;
//==========================
const [first, second] = [1, 2];
//======================
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
//========================
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
//==================

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}
const person = new Person('Alice', 30);













