
//syntax for queuing a callback function into check queue we can use following
//i.e setImmediate

//io queues like fs and https 
const fs = require("node:fs");
const timeout =0;

setImmediate(()=>{
    console.log("setImmediate call 1");
    });
    
fs.readFile(__filename, () => {
    console.log("readFile i/o queue 1");
});

process.nextTick(() => {
    console.log("this is nextTick 1");
});

Promise.resolve().then(() => {
    console.log("this is Promise.resolve 1");
}); 

setTimeout(() => {
    console.log("this is setTimeout timer queue 1");
}, timeout); 

setImmediate(()=>{
console.log("setImmediate call 2");
});

//though io queue is before the check queue still the result would be :
/* this is nextTick 1
this is Promise.resolve 1
this is setTimeout timer queue 1
setImmediate call 1
readFile i/o queue 1 
The reason being the IO works on the principle of polling for the IO operations to complete
and only is done when the eventloop gets completed,
in this case the callback for IO gets executed in two runs(loop) of the eventloop
*/






