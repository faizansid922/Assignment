function CustomArray() {
  this.size = arguments.length;
  for (let i = 0; i < arguments.length; i++) {
    this[i] = arguments[i];
  }
}

CustomArray.prototype.push = function (element) {
  this[this.size] = element;
  this.size++;
};

CustomArray.prototype.pop = function () {
  if (this.size === 0) {
    return undefined; // Stack is empty
  }
  const poppedElement = this[this.size - 1];
  delete this[this.size - 1];
  this.size--;
  return poppedElement;
};

CustomArray.prototype.top = function () {
  if (this.size === 0) {
    return undefined; // Stack is empty
  }
  return this[this.size - 1];
};

CustomArray.prototype.print = function () {
  const elements = [];
  for (let i = 0; i < this.size; i++) {
    elements.push(this[i]);
  }
  console.log(`[${elements.join(',')}]`);
};

CustomArray.prototype.printReverse = function () {
  const elements = [];
  for (let i = this.size - 1; i >= 0; i--) {
    elements.push(this[i]);
  }
  console.log(`[${elements.join(',')}]`);
};

// Example usage:
const myStack = new CustomArray(1, 2, 3, 4);
myStack.push(5);
myStack.print(); // Output: [1,2,3,4,5]
myStack.pop();
myStack.print(); // Output: [1,2,3,4]
console.log("Top element:", myStack.top()); // Output: Top element: 4
myStack.printReverse(); // Output: [4,3,2,1]
console.log("Stack size:", myStack.size); // Output: Stack size: 4
