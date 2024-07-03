
/* //to queue a callback function into the nexttick queue , this accepts a callback function as below
process.nextTick(() => {
    console.log("this is process nextTick 1");
});

//to queue a callback function into the Promis queue
Promise.resolve().then(() => {
    console.log("this is Promise.resolve 1");
}); */

//#################TEST-1##################
//testing the above ones 
console.log("console.log 1"); //this is synchronous so priority 1 
process.nextTick(() => console.log("process.nextTick1")); //async call so the callback function will
//be delegated to the libuv and the return to the callback would have to waitfor untill the call
//stack is empty. So priority will be 3 here.
console.log("console.log 2"); //this is also synchrounous so priority 2

//#################TEST-2##################
Promise.resolve().then(() => {
    console.log("this is Promise.Resolve 1"); //t
});
//test which one of the two gets to run first
process.nextTick(() => {
    console.log("this is next.Tick 1");
});

//#################TEST-3##################