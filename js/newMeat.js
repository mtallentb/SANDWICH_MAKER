console.log("Meat IIFE");

// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var meatPrices = { ham: 1.50,
  					 turkey: 1.50,
  					 roastBeef: 1.50,
  					 chicken: 1.50
  					};

  var currentToppings = [];

  // Augment the original object with another method
  maker.addMeat = function(meat) {

  	let meatDropdown = document.getElementById("meat-chooser");
  	let selectedMeat = meatDropdown.value;

 //  	currentToppings.push(meat);
  	console.log("Current Toppings: ", selectedMeat);

 //  	console.log("Meat to be added: ", meat);
 //  	numberOfMeats = $('#meat-chooser :selected').length;
	// console.log("Number of Meats: ", numberOfMeats)
    return meat;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);