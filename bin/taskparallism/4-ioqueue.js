//io queues like fs and https 
const fs = require("node:fs");

setTimeout(() => {
    console.log("this is setTimeout timer queue 1");
}, 0); //try increasing this value and check result for it and io queue
//the zero in settimeout is not actually zero
//in the c code of v8 we find that minimum value is actually 1 millisecond
//which means to check the timer if 1 millisend has elapsed or not 
//as this is default minimum value internally causing uncertainity
//if we increase the timeout then there are chances that the readfile io will be done 
//before the setTimeout queue task.
//still the microtask queue will be processed prior though setTimeout and FileRead has anomaly
fs.readFile(__filename, () => {
    console.log("readFile i/o queue 1");
});

process.nextTick(() => {
    console.log("this is nextTick 1");
});

Promise.resolve().then(() => {
    console.log("this is Promise.resolve 1");
});
