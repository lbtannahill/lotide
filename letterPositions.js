const letterPositions = function(sentence) {
  newObject = {}
  // removes spaces from count
  let sentenceN = sentence.slice().split(' ').join('');
  
  for (let letter of sentenceN) {
    if (Object.keys(newObject).includes(letter)) {
      newObject[letter] + ', ' +[sentence.indexOf(letter)] 
    } else {
      newObject[letter] = [sentence.indexOf(letter)]
    } }
  
    
  return newObject; 
}

console.log(letterPositions('hello')); 




// const countLetters = function(sentence) {
//   newObject = {}
//   // removes spaces from count
//   let sentenceN = sentence.slice().split(' ').join('');
  
//   for (let letter of sentenceN) {
//     if (Object.keys(newObject).includes(letter)) {
//       newObject[letter] ++
//     } else {
//       newObject[letter] = 1
//     }
//   }
    
//   return newObject;
// };
