const removeFromArray = function (...args) {
  const array = args[0];
  const elementsToRemove = args.slice(1);

  const newArray = array.filter(
    (element) => !elementsToRemove.includes(element)
  );
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
