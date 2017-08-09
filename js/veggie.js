console.log("Veggie IIFE");

// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var veggiePrices = {
  	lettuce: .25,
  	tomatoes: .25,
  	onions: .25,
  	peppers: .25
  };

  // Augment the original object with another method
  maker.addVeggie = function(ingredient) {
    let lettuce = document.getElementById("lettuce");
    let tomatoes = document.getElementById("tomatoes");
    let onions = document.getElementById("onions");
    let peppers = document.getElementById("peppers");
    let veggieTarget = document.getElementById("veggieTarget");
    let totalVeggiePriceArr = [];
    let whichVeggie = [];

    if (lettuce.checked) {
      totalVeggiePriceArr.push(veggiePrices.lettuce);
      whichVeggie.push('Lettuce');
    } 
    if (tomatoes.checked) {
      totalVeggiePriceArr.push(veggiePrices.tomatoes);
      whichVeggie.push('Tomatoes');
    } 
    if (onions.checked) {
      totalVeggiePriceArr.push(veggiePrices.onions);
      whichVeggie.push('Onions');
    } 
    if (peppers.checked) {
      totalVeggiePriceArr.push(veggiePrices.peppers);
      whichVeggie.push('Bell Peppers');
    }

    veggieTarget.innerHTML += `<h5>${whichVeggie.join(", ")}</h5>`;

    console.log("You want the following veggies: ", whichVeggie.join(", "));
    console.log("Total Veggie Price Array: ", totalVeggiePriceArr);

    let totalVeggiePrice = totalVeggiePriceArr.reduce(function(prevVal, currentVal) {
      return (prevVal + currentVal);
    });

    console.log("Total Veggie Price: ", totalVeggiePrice.toFixed(2));

    return totalVeggiePrice;
  };
  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);