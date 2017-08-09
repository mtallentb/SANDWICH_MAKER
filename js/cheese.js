console.log("Cheese IIFE"); 

// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var cheesePrices = {
    cheddar: .15,
    swiss: .15,
    havarti: .20,
    provolone: .17
  };


  // Augment the original object with another method
  maker.addCheese = function() {

    let cheddar = document.getElementById("cheddar");
    let swiss = document.getElementById("swiss");
    let havarti = document.getElementById("havarti");
    let provolone = document.getElementById("provolone");
    let cheeseTarget = document.getElementById("cheeseTarget");
    let totalCheesePriceArr = [];
    let whichCheese = [];

    if (cheddar.checked) {
      totalCheesePriceArr.push(cheesePrices.cheddar);
      whichCheese.push('Cheddar');
    } 
    if (swiss.checked) {
      totalCheesePriceArr.push(cheesePrices.swiss);
      whichCheese.push('Swiss');
    } 
    if (havarti.checked) {
      totalCheesePriceArr.push(cheesePrices.havarti);
      whichCheese.push('Havarti');
    } 
    if (provolone.checked) {
      totalCheesePriceArr.push(cheesePrices.provolone);
      whichCheese.push('Provolone');
    }

    cheeseTarget.innerHTML += `<h5>${whichCheese.join(", ")}</h5>`;

    console.log("You want the following cheese: ", whichCheese.join(", "));
    console.log("Total Meat Price Array: ", totalCheesePriceArr);

    let totalCheesePrice = totalCheesePriceArr.reduce(function(prevVal, currentVal) {
      return (prevVal + currentVal);
    });

    console.log("Total Cheese Price: ", totalCheesePrice.toFixed(2));

    return totalCheesePrice;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});