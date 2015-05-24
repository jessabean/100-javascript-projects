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
  $input            = $('input');
  $inputFahrenheit  = $('.js-input-fahrenheit');
  $inputCelsius     = $('.js-input-celsius');
  $errorsDiv        = $('.js-errors');

  $input.on('blur', function() {
    var value   = $(this).val();
    var type    = $(this).attr('data-unit');

    if ( value == '' ) {
      value = 0;
    };

    if ( $.isNumeric(value) ) {

      if ( type == 'fahrenheit' ) {
        fahrenheitToCelsius(value);
      }
      else {
        celsiusToFahrenheit(value);        
      };

      $errorsDiv.addClass('is-hidden');
      $errorsDiv.html("");

    } else {
      
      $errorsDiv.removeClass('is-hidden');
      $errorsDiv.html("Sorry, I can only convert numbers from " + type);
    
    };
  });

});
