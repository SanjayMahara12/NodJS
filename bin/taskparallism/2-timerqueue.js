
/* //timer queue syntax .....testing the priority with other queues
Promise.resolve().then(() => {
    console.log("this is Promise.Resolve 1"); //t
});
 */
//###Testing the priority of return and callback from the callstack###
//doesnt matter where we take the setTimeout queue start or at the end of the call
//this will always be executed/return with result after all the priority queueus are done
//i.e 
//1.All the sync functions will finish, and all the callbacks would be moved to libuv
//2.now next.Tick ones will be served
//3.now promise.Resolve ones will be served
//4.now setTimeout will be served when the stack for is empty finally for its turn
console.log("sync log call 1");
const timeout = 3;
setTimeout(() => {
    console.log("this is the setTImeout 1");
}, timeout);
setTimeout(() => {
    console.log("this is the setTImeout 2");
}, timeout);
setTimeout(() => {
    console.log("this is the setTImeout 3");
}, timeout);

process.nextTick(() => {
    console.log("this is next.Tick 1");
});
process.nextTick(() => {
    console.log("this is next.Tick 2");
});
process.nextTick(() => {
    console.log("this is next.Tick 3");
});

Promise.resolve().then(() => {
    console.log("this is Promise.Resolve 1"); //t
});
Promise.resolve().then(() => {
    console.log("this is Promise.Resolve 2"); //t
});
Promise.resolve().then(() => {
    console.log("this is Promise.Resolve 3"); //t
});

console.log("sync log call 2"); //this should get served second in the priority being a synchrounous