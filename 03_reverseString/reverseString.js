const reverseString = function (reversed) {
  let stringSplit = reversed.split("");
  let reverseWord = stringSplit.reverse();
  let newWord = reverseWord.join("");
  return newWord;
};

// Do not edit below this line
module.exports = reverseString;
