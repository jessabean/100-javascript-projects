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

function calculateMinutes() {
  $hoursInput.on('blur', function() {
    convertMinutes();
  });
  $minutesInput.on('blur', function() {
    convertMinutes();
  })
};

function limitMinutesLength() {
  $minutesInput.keyup(function() {
    var maxChars = 2;
    if ($(this).val().length > maxChars) {
        $(this).val($(this).val().substr(0, maxChars));
    }
  });
};

function limitMinutesNumber() {
  $minutesInput.keyup(function() {
    var maxMinutes = 59;
    if( $(this).val() > 59 || $(this).val() < 0) {
      $errorsOutput.html("Minutes must be between 0 and 59");
    } else {
      $errorsOutput.html("");
    }
  })
}

$(document).ready(function() {
  convertMinutes();
  calculateMinutes();
  limitMinutesLength();
  limitMinutesNumber();
});
  
