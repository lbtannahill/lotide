const eqArrays = function(array1, array2) {
  if (Array.isArray(array1) &&
  Array.isArray(array2) &&
  array1.length === array2.length &&
  array1.every((val, i) => val === array2[i])) {
    console.log(`😻😻😻 Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🙀🙀🙀 Assertion Failed: ${array1} !=== ${array2}`);
  }
};

console.log(eqArrays([1, 2, 3], [1, 2, 3]));