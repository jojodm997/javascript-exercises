const removeFromArray = function(array, ...rest) {
  let result = array.filter(x => !rest.includes(x));
  return result
};

// Do not edit below this line
module.exports = removeFromArray;
