
// Gallons to Liters

var gallonsToLiters = function (gallons) {
  return gallons * 3.78541;
};

var gallonsInput = parseFloat(prompt("Enter gallons"));

var result = gallonsToLiters(gallonsInput);
alert(result);


// Liters to Gallons

var litersToGallons = function(liters) {
  var total = liters * 0.264172;
  return total;
};


var litersInput = parseFloat(prompt("Enter Liters"));

var result = litersToGallons(litersInput);
alert(result);
