const ftoc = function(tempFahrenheit) {
  let result = (tempFahrenheit - 32) * (5 / 9);
  let roundedResult = Math.round(result * 10) / 10;
  return roundedResult;
}

const ctof = function(tempCelcius) {
  let result = (tempCelcius * (9 / 5)) + 32;
  let roundedResult = Math.round(result * 10) / 10;
  return roundedResult;
}

module.exports = {
  ftoc,
  ctof
}
