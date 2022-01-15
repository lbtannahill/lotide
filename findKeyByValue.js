//function findKeyByValue - takes object and a value 
// iterates over object and returns key that contains the value
// if no key = valye, return undefined 


const findKeyByValue = function(objectTakes, vvalue) {

  for (const [key, value] of Object.entries(objectTakes)) {
  if (value === vvalue){
    return key
    console.log('key', key)
  }
}return undefined
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show"));


  