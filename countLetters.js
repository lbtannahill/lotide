const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😻😻😻 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🙀🙀🙀 Assertion Failed: ${actual} !=== ${expected}`);
  }
}

  const countLetters = function(sentence) {
    newObject = {}
    // removes spaces from count
    let sentenceN = sentence.slice().split(' ').join('');
    for (let letter of sentenceN) {
      if (Object.keys(newObject).includes(letter)) {
        newObject[letter] ++
      } else {
        newObject[letter] = 1
      }
    }
      
    return newObject;
  };


console.log(countLetters('hello there'));