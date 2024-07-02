//
const EventEmitter = require("node:events");

class PizzaShop extends EventEmitter{

    constructor() {
        super(); //class based inheritence 
        this.ordernumber = 0;
    }

    order(size,topping) {
        this.ordernumber++;
        this.emit('order',size,topping);
    }

    displayorder() {
        console.log(`your order number is ${this.ordernumber}`);
    }

}

module.exports = PizzaShop;

