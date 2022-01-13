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

const without = function(source, itemsToRemove) {
  let newVar =
  source.filter(i => {
    if (itemsToRemove.includes(i) !== true) {
      return i;
    }
  }
  );
  return newVar;
};

console.log(without([1, 2, 3], [1]));

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);