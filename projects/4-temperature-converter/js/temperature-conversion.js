function fahrenheitToCelsius(value) {
  // Fahrenheit to Celsius math
  var celsiusConversionFormula = (value - 32) * 5/9;

  // limit to one decimal place
  var celsiusOutput = (celsiusConversionFormula).toFixed(1);

  $('.js-input-celsius').val(celsiusOutput);
};

$ ( document ).ready(function() {
  $inputFahrenheit = $('.js-input-fahrenheit');
  $inputCelsius = $('.js-input-celsius');

  $inputFahrenheit.on('blur', function() {
    var $fahrenheitValue = $inputFahrenheit.val();

    fahrenheitToCelsius($fahrenheitValue);
  });
  
});
