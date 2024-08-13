const leapYears = function(year) {
  const ifYearDivisibleByFour = year % 4 === 0;
  const ifYearDivisbleByOneHundred = year % 100 === 0;
  const ifYearDivisibleByFourHundred = year % 400 === 0;

  if (ifYearDivisibleByFour && (!ifYearDivisbleByOneHundred || ifYearDivisibleByFourHundred)) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
