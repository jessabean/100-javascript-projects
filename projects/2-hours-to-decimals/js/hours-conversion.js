var $form           = $('.js-time-conversion-form');
var $hoursInput     = $('.js-hours-input');
var $minutesInput   = $('.js-minutes-input');
var $decimalOutput  = $('.js-converted-hours');
var $errorsOutput   = $('.js-errors');


function convertMinutes() {
  var hours             = $hoursInput.val();
  var minutes           = $minutesInput.val();

  if( hours == "" ) {
    hours = "0";
  }

  var minutesInDecimal  = (minutes / 60).toFixed(2)
  
  var convertedHours    = parseFloat(hours);
  var convertedMinutes  = parseFloat(minutesInDecimal);
  var total             = convertedHours += convertedMinutes;

  $decimalOutput.html(total + " hours");
};

function limitMinutesLength() {
  var maxChars = 2;

  if ($minutesInput.val().length > maxChars) {
      $minutesInput.val($minutesInput.val().substr(0, maxChars));
  };
};

function limitMinutesNumber() {
  var maxMinutes = 59;

  if( $minutesInput.val() > 59 || $minutesInput.val() < 0) {
    $errorsOutput.html("Minutes must be between 0 and 59");
  } else {
    $errorsOutput.html("");
  };
}

$(document).ready(function() {
  $hoursInput.on('blur', convertMinutes);
  $minutesInput.on('blur', convertMinutes);
  $minutesInput.on('keyup', limitMinutesLength);
  $minutesInput.on('keyup', limitMinutesNumber);
});
  
