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

module.exports = tail;

