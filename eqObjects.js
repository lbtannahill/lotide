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

const eqObjects = function(object1, object2) {
  let newOb1 = Object.keys(object1);
  let newOb2 = Object.keys(object2);
  if (newOb1.length !== newOb2.length) {
    return false;
  } else {
    for (let key of newOb1)
      if (newOb1[key] === newOb2[key]) {
        return true;
      }
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true)

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false