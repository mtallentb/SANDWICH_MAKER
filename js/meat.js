console.log("Meat IIFE"); 

// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var meatPrices = {
    ham: 1.25,
    turkey: 1.35,
    roastBeef: 1.50,
    chicken: 1.30
  };


  // Augment the original object with another method
  maker.addMeat = function() {

    let ham = document.getElementById("ham");
    let turkey = document.getElementById("turkey");
    let roastBeef = document.getElementById("roastBeef");
    let chicken = document.getElementById("chicken");
    let meatTarget = document.getElementById("meatTarget");
    let totalMeatPriceArr = [];
    let whichMeat = [];

    if (ham.checked) {
      totalMeatPriceArr.push(meatPrices.ham);
      whichMeat.push('Ham');
    } 
    if (turkey.checked) {
      totalMeatPriceArr.push(meatPrices.turkey);
      whichMeat.push('Turkey');
    } 
    if (roastBeef.checked) {
      totalMeatPriceArr.push(meatPrices.roastBeef);
      whichMeat.push('Roast Beef');
    } 
    if (chicken.checked) {
      totalMeatPriceArr.push(meatPrices.chicken);
      whichMeat.push('Chicken');
    }

    meatTarget.innerHTML = `<h5>${whichMeat.join(", ")}</h5>`;

    console.log("You want the following meat: ", whichMeat.join(", "));
    console.log("Total Meat Price Array: ", totalMeatPriceArr);

    let totalMeatPrice = totalMeatPriceArr.reduce(function(prevVal, currentVal) {
      return (prevVal + currentVal);
    });

    console.log("Total Meat Price: ", totalMeatPrice.toFixed(2));

    return totalMeatPrice;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});