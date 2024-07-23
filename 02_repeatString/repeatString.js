const repeatString = function (word, times) {
  console.log("repeatString called with:", word, times); // Debug statement
  if (times < 0) return "ERROR";
  let string = "";
  for (let i = 0; i < times; i++) {
    string += word;
  }
  return string;
};

// Do not edit below this line
module.exports = repeatString;
