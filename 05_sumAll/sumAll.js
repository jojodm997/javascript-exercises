const sumAll = function(begin, end) {
  if (typeof begin !== "number" || typeof end !== "number") return "ERROR";
  if (begin < 0) return "ERROR";
  if (begin > end) [begin, end] = [end, begin];

  let result = 0;
  for (let i = begin; i <= end; i++) {
    result += i;
  }
  return result;
};

// Do not edit below this line
module.exports = sumAll;
