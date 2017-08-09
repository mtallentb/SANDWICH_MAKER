console.log("Bread IIFE"); 

// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var breadPrices = {
    whiteBread: .67,
    wheatBread: .82,
    multigrain: .96,
    sourdough: .87,
    rye: .94
  };


  // Augment the original object with another method
  maker.addBread = function() {

    let whiteBread = document.getElementById("whiteBread");
    let wheatBread = document.getElementById("wheatBread");
    let multigrain = document.getElementById("multigrain");
    let sourdough = document.getElementById("sourdough");
    let breadTarget = document.getElementById("breadTarget");
    let totalBreadPriceArr = [];
    let whichBread = [];

    if (whiteBread.checked) {
      totalBreadPriceArr.push(breadPrices.whiteBread);
      whichBread.push('White Bread');
    } 
    if (wheatBread.checked) {
      totalBreadPriceArr.push(breadPrices.wheatBread);
      whichBread.push('Wheat Bread');
    } 
    if (multigrain.checked) {
      totalBreadPriceArr.push(breadPrices.multigrain);
      whichBread.push('Multigrain');
    } 
    if (sourdough.checked) {
      totalBreadPriceArr.push(breadPrices.sourdough);
      whichBread.push('Sourdough');
    }

    breadTarget.innerHTML += `<h5>${whichBread.join(", ")}</h5>`;

    console.log("You want the following bread: ", whichBread.join(", "));
    console.log("Total Bread Price Array: ", totalBreadPriceArr);

    let totalBreadPrice = totalBreadPriceArr.reduce(function(prevVal, currentVal) {
      return (prevVal + currentVal);
    });

    console.log("Total Bread Price: ", totalBreadPrice.toFixed(2));

    return totalBreadPrice;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});