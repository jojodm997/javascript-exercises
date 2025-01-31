const convertToCelsius = function(fahrenhit) {
  const celcius = (fahrenhit - 32) / 1.8
  const total = Math.round(celcius * 10) / 10
  return total
};

const convertToFahrenheit = function(celcius) {
  const fahrenhit = celcius * 1.8 + 32
  const total = Math.round(fahrenhit * 10) / 10
  return total
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
