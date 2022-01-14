// map will take in two arguments - an array, a callback function
//
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

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }

  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1)


