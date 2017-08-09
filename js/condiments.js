console.log("Condiments IIFE");

// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var saucePrices = {
  	mayonnaise: .12,
  	classicMustard: .13,
    spicyMustard: .17,
  	honeyMustard: .15
  };

  // Augment the original object with another method
  maker.addSauce = function(ingredient) {
    let mayonnaise = document.getElementById("mayonnaise");
    let classicMustard = document.getElementById("classicMustard");
    let spicyMustard = document.getElementById("spicyMustard");
    let honeyMustard = document.getElementById("honeyMustard");
    let sauceTarget = document.getElementById("sauceTarget");
    let totalSaucePriceArr = [];
    let whichSauce = [];

    if (mayonnaise.checked) {
      totalSaucePriceArr.push(saucePrices.mayonnaise);
      whichSauce.push('Mayonnaise');
    } 
    if (classicMustard.checked) {
      totalSaucePriceArr.push(saucePrices.classicMustard);
      whichSauce.push('Classic Mustard');
    } 
    if (spicyMustard.checked) {
      totalSaucePriceArr.push(saucePrices.spicyMustard);
      whichSauce.push('Spicy Mustard');
    } 
    if (honeyMustard.checked) {
      totalSaucePriceArr.push(saucePrices.honeyMustard);
      whichSauce.push('Honey Mustard');
    }

    sauceTarget.innerHTML += `<h5>${whichSauce.join(", ")}</h5>`;

    console.log("You want the following condiments: ", whichSauce.join(", "));
    console.log("Total Sauce Price Array: ", totalSaucePriceArr);

    let totalSaucePrice = totalSaucePriceArr.reduce(function(prevVal, currentVal) {
      return (prevVal + currentVal);
    });

    console.log("Total Meat Price: ", totalSaucePrice.toFixed(2));

    return totalSaucePrice;
  };
  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);