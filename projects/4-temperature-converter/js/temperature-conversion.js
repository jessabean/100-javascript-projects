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
  $inputFahrenheit  = $('.js-input-fahrenheit');
  $inputCelsius     = $('.js-input-celsius');
  $errorsDiv        = $('.js-errors');

  $inputFahrenheit.on('blur', function() {
    var $fahrenheitValue = $inputFahrenheit.val();

    if ($fahrenheitValue == '') {
      $fahrenheitValue = 0;
    }
    
    if ($.isNumeric($fahrenheitValue)) {
      fahrenheitToCelsius($fahrenheitValue);
      $errorsDiv.html("");
    } else {
      $errorsDiv.html("Sorry, I can only convert numbers to Celsius.");
    };
  });

  $inputCelsius.on('blur', function() {
    var $celsiusValue = $inputCelsius.val();

    if ($celsiusValue == '') {
      $celsiusValue = 0;
    }

    if ($.isNumeric($celsiusValue)) {
      celsiusToFahrenheit($celsiusValue);
      $errorsDiv.html("");
    } else {
      $errorsDiv.html("Sorry, I can only convert numbers to Fahrenheit.");
    };
  });
});
