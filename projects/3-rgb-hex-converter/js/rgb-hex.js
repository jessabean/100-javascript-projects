function rgbToHex(R,G,B) {
  event.preventDefault();

  $('.js-hex-output').html(
    // need to perform the hex conversion on each primary color
    // then add them all together
    convertToHex(R) + convertToHex(G) + convertToHex(B)
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
};

function validateRGB(value) {
  // RGB value must be a number
  // RGB value must be a number between 0 and 255
};

function hexToRGB(hex) {
  event.preventDefault();

  // set up the decoder ring
  var index = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

  // put each character of the hex argument into the array
  var hexArray = (hex).toString().split("");

  // set up container for decoded values
  var rgb = [];

  // decode the characters in hex array and add to rgb container
  for ( var i=0; i < hexArray.length; i++) {
    var character = hexArray[i].toUpperCase();
    var code = jQuery.inArray(character, index);
    rgb.push(code);
  }

  // okay let's actually do the math now
  convertToHex(rgb);
};

function convertToHex(array) {

  // split out every 2 characters in the array
  var R = array.splice(0, 2);
  var G = array.splice(0, 2);
  var B = array.splice(0, 2);

  // array of arrays so we can loop through it
  var rgbArray = [R, G, B];

  // set up container for final rgb output
  var rgbOutput = []

  // grab each x/y value from the rgb array
  for(var i = 0; i < rgbArray.length; i++){
 
    var x = rgbArray[i][0];
    var y = rgbArray[i][1];

    // color math, yo
    var rgbValue = (x * 16) + y;

    rgbOutput.push(rgbValue);
  }

  // put the answer in the div
  $('.js-hex-output').html(
    rgbOutput.join(",")
  );
}

function validateHex(value) {
  // Hex value must be 6 characters
  // Hex value must only contain characters contained in the array
}

$ ( document ).ready(function() {
  $rgbToHexButton = $('.js-rgb-to-hex');
  $hexToRGBButton = $('.js-hex-to-rgb');

  $rgbToHexButton.on('click', function() {
    var $red      = $('.js-red-input').val();
    var $green    = $('.js-green-input').val();
    var $blue     = $('.js-blue-input').val();

    rgbToHex($red, $green, $blue);
  });

  $hexToRGBButton.on('click', function() {
    var $hexValue = $('.js-hex-input').val();

    hexToRGB($hexValue);
  })
});
