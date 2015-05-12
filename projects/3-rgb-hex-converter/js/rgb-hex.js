function rgbToHex(R,G,B) {
  event.preventDefault();

  $('.js-hex-output').html(
    // need to perform the hex conversion on each primary color
    // then add them all together
    convertToHex(R) + convertToHex(G) + convertToHex(B);
  );
};

function convertToHex(value) {

  // A - 10; B - 11; C - 12; D - 13; E - 14; F - 15;
  var index = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

  // RGB to Hex math
  var x = Math.floor( value / 16 );
  var y = value % 16;

  // Assign the 2 characters that comprise each primary color's value
  var hex1 = index[x];
  var hex2 = index[y];

  // stringify
  return hex1.toString() + hex2.toString();
}

$ ( document ).ready(function() {
  $('.js-hex-rgb-form').on('submit', function() {
    var $red      = $('.js-red-input').val();
    var $green    = $('.js-green-input').val();
    var $blue     = $('.js-blue-input').val();

    rgbToHex($red, $green, $blue);
  });
});
