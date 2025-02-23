const fibonacci = function(num) {
  if (num < 0) return "OOPS";
  f = [0, 1];

  for (let n = 2; n <= num; n++) {
    f[n] = f[n - 1] + f[n - 2]
  }
  return f[num];
};

// Do not edit below this line
module.exports = fibonacci;
