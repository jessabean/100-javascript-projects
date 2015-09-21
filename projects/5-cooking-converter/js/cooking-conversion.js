window.onload = function() {
  var select = document.getElementsByClassName("js-cu-units");
  var options = [
    "Tablespoons",
    "teaspoons",
    "fluid ounces",
    "cups",
    "pints",
    "quarts",
    "gallons",
    "milliliters",
  ];

  for(i = 0; i < select.length; i += 1) {
    for(k = 0; k < options.length; k += 1) {
      var opt = document.createElement("option");
      opt.innerHTML = options[k];
      select[i].appendChild(opt);
    };
  };

};

var convertUnits = function() {
  var value = document.getElementById("cu-input-amount").value;
  var answer = tbspToTsp(value);
  alert(answer);
  return false;
};

var tbspToTsp = function(val) {
  return val * 3;
};

window.onsubmit = convertUnits;
