function convertMinutes() {
  var $form           = $('.js-time-conversion-form');
  var $hoursInput     = $('.js-hours-input');
  var $minutesInput   = $('.js-minutes-input');

  $form.submit(function( event ) {
    var hours             = $hoursInput.val();
    var minutes           = $minutesInput.val();

    if( hours == "" ) {
      hours = "0";
    }

    var minutesInDecimal  = (minutes / 60).toFixed(2)
    
    var convertedHours    = parseFloat(hours);
    var convertedMinutes  = parseFloat(minutesInDecimal);
    var total             = convertedHours += convertedMinutes;

    alert(total);

    event.preventDefault();
  });
};

$(document).ready(function() {
  convertMinutes();
});
  
