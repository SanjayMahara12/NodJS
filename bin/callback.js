
//node ./bin/callback 
const pizzaShop = require("../utils/pizza-shop.js");

function greet(name){ //synchronous function , called immediately
    console.log(`hello ${name}`);
};

//basic use of the callback function , a function passed as an argument to another function
function announce(namcall){
    const name = "sanjay mahara ";
    namcall(name);
};

announce(greet);

//Asynchronous callback , to continue / resume code execution 
//callbacks are used to delay a particular processing until a particular time or event has occured
//e.g event handlers 





