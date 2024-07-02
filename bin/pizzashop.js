
//node ./bin/pizzashop.js


const PizzaShop = require("../utils/pizza-shop.js");
const DrinkMachine = require("../utils/drink-machine.js");
//create the objec tof the instance now 
const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();
pizzaShop.on("order",(size,topping)=> {
console.log(`order placed for pizza with size ${size} and toppings: ${topping}`);
console.log(drinkMachine.servedrink("large"));
});

pizzaShop.order('medium','onions and tomatoes');
pizzaShop.displayorder();

