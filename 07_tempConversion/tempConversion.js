const convertToCelsius = function(temp) {
  let celsius = (temp - 32) * 0.55555555555;
  return +celsius.toFixed(1);
};

const convertToFahrenheit = function(temp) {
  let fahrenheit = temp * 1.8 + 32;
  return +fahrenheit.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
