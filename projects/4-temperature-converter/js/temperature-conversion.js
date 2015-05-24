function fahrenheitToCelsius(value) {
  // Fahrenheit to Celsius math
  var celsiusConversionFormula = (value - 32) * 5/9;

  // limit to one decimal place
  var celsiusOutput = (celsiusConversionFormula).toFixed(1);

  $('.js-input-celsius').val(celsiusOutput);
};

function celsiusToFahrenheit(value) {
  // Celsius to Fahrenheit math
  var fahrenheitConversionFormula = (value * (9/5)) + 32;

  // limit to one decimal place
  var fahrenheitOutput = (fahrenheitConversionFormula).toFixed(1);

  $('.js-input-fahrenheit').val(fahrenheitOutput);
}

$ ( document ).ready(function() {
  $inputFahrenheit = $('.js-input-fahrenheit');
  $inputCelsius = $('.js-input-celsius');

  $inputFahrenheit.on('blur', function() {
    var $fahrenheitValue = $inputFahrenheit.val();

    fahrenheitToCelsius($fahrenheitValue);
  });

  $inputCelsius.on('blur', function() {
    var $celsiusValue = $inputCelsius.val();

    celsiusToFahrenheit($celsiusValue);
  });
});
