const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😻😻😻 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🙀🙀🙀 Assertion Failed: ${actual} !=== ${expected}`);
  }

};

const tail = function(array) {
  let newArray = array.splice(0, 1);
  return newArray;

};

// Test Case: Check the original array
const words = [];
tail(words);
assertEqual(words.length, 3);
