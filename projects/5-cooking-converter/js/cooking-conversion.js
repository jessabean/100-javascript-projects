var measurementsTable = {
  "tablespoons": {
    "to_tablespoons": function(val) { return val * 1 },
    "to_teaspoons":   function(val) { return val * 3 },
    "to_cups":        function(val) { return val * 0.0625 },
    "to_pints":       function(val) { return val * 0.03125 },
    "to_quarts":      function(val) { return val * 0.015625 },
    "to_gallons":     function(val) { return val * 0.00390625 },
    "to_milliliters": function(val) { return val * 14.7868 },
    "to_liters":      function(val) { return val * 0.0147868 }
  },
  "teaspoons": {
    "to_tablespoons": function(val) { return val * 0.333333 },
    "to_teaspoons":   function(val) { return val * 1 },
    "to_cups":        function(val) { return val * 0.0208333 },
    "to_pints":       function(val) { return val * 0.0104167 },
    "to_quarts":      function(val) { return val * 0.00520833 },
    "to_gallons":     function(val) { return val * 0.00130208 },
    "to_milliliters": function(val) { return val * 4.92892 },
    "to_liters":      function(val) { return val * 0.00492892 }
  },
  "cups": {
    "to_tablespoons": function(val) { return val * 16 },
    "to_teaspoons":   function(val)  { return val * 48 },
    "to_cups":        function(val) { return val * 1 },
    "to_pints":       function(val) { return val * 0.5 },
    "to_quarts":      function(val) { return val * 0.25 },
    "to_gallons":     function(val) {return val * 0.0625 },
    "to_milliliters": function(val) {return val * 236.588 },
    "to_liters":      function(val) { return val * 0.236588 }
  },
  "pints": {
    "to_tablespoons": function(val) { return val * 32 },
    "to_teaspoons":   function(val)  { return val * 96 },
    "to_cups":        function(val) { return val * 2 },
    "to_pints":       function(val) { return val * 1 },
    "to_quarts":      function(val) { return val * 0.5 },
    "to_gallons":     function(val) {return val * 0.125 },
    "to_milliliters": function(val) {return val * 473.176 },
    "to_liters":      function(val) { return val * 0.473176 }
  },
  "quarts": {
    "to_tablespoons": function(val) { return val * 64 },
    "to_teaspoons":   function(val)  { return val * 192 },
    "to_cups":        function(val) { return val * 4 },
    "to_pints":       function(val) { return val * 2 },
    "to_quarts":      function(val) { return val * 1 },
    "to_gallons":     function(val) {return val * 0.25 },
    "to_milliliters": function(val) {return val * 946.353 },
    "to_liters":      function(val) { return val * 0.946353 }
  },
  "gallons": {
    "to_tablespoons": function(val) { return val * 256 },
    "to_teaspoons":   function(val)  { return val * 768 },
    "to_cups":        function(val) { return val * 16 },
    "to_pints":       function(val) { return val * 8 },
    "to_quarts":      function(val) { return val * 4 },
    "to_gallons":     function(val) {return val * 1 },
    "to_milliliters": function(val) {return val * 3785.41 },
    "to_liters":      function(val) { return val * 3.78541 }
  },
  "milliliters": {
    "to_tablespoons": function(val) { return val * 0.067628 },
    "to_teaspoons":   function(val)  { return val * 0.202884 },
    "to_cups":        function(val) { return val * 0.00422675 },
    "to_pints":       function(val) { return val * 0.00211338 },
    "to_quarts":      function(val) { return val * 0.00105669 },
    "to_gallons":     function(val) {return val * 0.000264172 },
    "to_milliliters": function(val) {return val * 1 },
    "to_liters":      function(val) { return val * 0.001 }
  },
  "liters": {
    "to_tablespoons": function(val) { return val * 67.628 },
    "to_teaspoons":   function(val)  { return val * 202.884 },
    "to_cups":        function(val) { return val * 4.22675 },
    "to_pints":       function(val) { return val * 2.11338 },
    "to_quarts":      function(val) { return val * 1.05669 },
    "to_gallons":     function(val) {return val * 0.264172 },
    "to_milliliters": function(val) {return val * 1000 },
    "to_liters":      function(val) { return val * 1 }
  }
};

var changeAmount = function(event) {
  convertUnits(event.target);
};

var changeUnit = function(event) {
  var input = document.getElementById("cu-input-1");
  convertUnits(input);
};

var convertUnits = function(input) {
  var value           = input.value;
  var baseSelect      = input.getAttribute("data-unit");
  var fromUnit        = document.getElementById(baseSelect).value;
  var targetSelect    = input.getAttribute("data-target-select");
  var toUnit          = document.getElementById(targetSelect).value;
  var targetInput     = input.getAttribute("data-target");

  var answer          = measurementsTable[fromUnit]["to_" + toUnit](value);

  document.getElementById(targetInput).value = answer;
};

var populateSelect = function() {
  var select = document.getElementsByClassName("js-cu-units");
  var options = [
    "tablespoons",
    "teaspoons",
    "cups",
    "pints",
    "quarts",
    "gallons",
    "milliliters",
    "liters"
  ];

  for(i = 0; i < select.length; i += 1) {
    for(k = 0; k < options.length; k += 1) {
      var opt = document.createElement("option");
      opt.innerHTML = options[k];
      select[i].appendChild(opt);
    };
  };
};

window.onload = function() {
  populateSelect();
};
