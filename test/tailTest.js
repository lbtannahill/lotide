const assertEqual = require('../assertEqual.js');

const tail = require('../tail.js')


const words = [];
tail(words);
assertEqual(words.length, 3);
