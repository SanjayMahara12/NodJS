//node ./bin/eventsmodule.js 
const eventEmitter = require("node:events");

const emitter = new eventEmitter();

//listner1
emitter.on("order-pizza",(size,topping) => {
console.log(`order recieved,backing a pizza with size ${size} with topping ${topping}`);
});

console.log("Doing backend restaurant work, non-blocking by the listeners");
//emit event
emitter.emit("order-pizza","large","capsicum");

//not blocking any execution here i.e event driven 

