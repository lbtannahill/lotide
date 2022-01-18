const assertArraysEqual = function(array1, array2) {
  if (Array.isArray(array1) &&
  Array.isArray(array2) &&
  array1.length === array2.length &&
  array1.every((val, i) => val === array2[i])) {
    console.log(`😻😻😻 Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🙀🙀🙀 Assertion Failed: ${array1} !=== ${array2}`);
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

const middle = function(array) {
  let result = []
if (array.length % 2 === 1) {
  result = 
    array[Math.floor(array.length / 2)] 
  } else if (array.length % 2 === 0) {
    result =
    array[Math.floor((array.length - 1) / 2)] + ", " +
    array[Math.floor(array.length / 2)]
  } else if (array.length === 1 || array.length === 2) {
    result = []
  };
return result;
}


module.exports = middle;