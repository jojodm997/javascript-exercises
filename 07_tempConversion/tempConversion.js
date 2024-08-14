const convertToCelsius = function(fh) {
  let celcius = Math.round((fh - 32) / 1.8 * 10) / 10;
  return celcius;
};
console.log(convertToCelsius(100));

const convertToFahrenheit = function(cs) {
  let fahrenheit = Math.round((cs * 1.8 + 32) * 10) / 10;
  return fahrenheit;
};
console.log(convertToFahrenheit(0));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
