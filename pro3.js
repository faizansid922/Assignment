// Function to convert a character to lowercase
function charToLower(char) {
  return char.toLowerCase();
}

// Function to convert a word to lowercase
function wordToLower(word) {
  return word.split('').map(charToLower).join('');
}

// Function to convert an array of strings to an array of lowercase strings
function arrayToLower(arr) {
  return arr.map(wordToLower);
}

// Sample Input
const inputArray = ["MA", "SA", "I", "SCH", "OOL"];

// Sample Output
const outputArray = arrayToLower(inputArray);
console.log(outputArray); // Output: ["ma", "sa", "i", "sch", "ool"]
