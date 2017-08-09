// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

// Variable to hold topping that the user selects
var selectedTopping;

 // Determine the price of the topping chosen

 // Add the topping to the SandwichMaker to increase the total price
let addBreadBtn = document.getElementById("breadBtn");
addBreadBtn.addEventListener('click', SandwichMaker.addBread);

let addMeatBtn = document.getElementById("meatBtn");
addMeatBtn.addEventListener('click', SandwichMaker.addMeat);

let addCheeseBtn = document.getElementById("cheeseBtn");
addCheeseBtn.addEventListener('click', SandwichMaker.addCheese);

let addVeggieBtn = document.getElementById("veggieBtn");
addVeggieBtn.addEventListener('click', SandwichMaker.addVeggie);

let addSauceBtn = document.getElementById("sauceBtn");
addSauceBtn.addEventListener('click', SandwichMaker.addSauce);