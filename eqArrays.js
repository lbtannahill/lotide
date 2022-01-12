const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😻😻😻 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🙀🙀🙀 Assertion Failed: ${actual} !=== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
    if (Array.isArray(array1) && 
    Array.isArray(array2) &&
    array1.length === array2.length && 
    array1.every((val, i) => val === array2[i])) {
      return true; 
    } else {
      return false;
    }
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false) // => false