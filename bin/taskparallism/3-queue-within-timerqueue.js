//testing what would happen if a high priority queue is within the timer queue
//figure out the call priority and the order of execution now.
console.log("sync log call 1");
const timeout = 3;
setTimeout(() => {
    console.log("this is the setTImeout 1");
    process.nextTick(()=>{
   console.log("this is inner next.Tick within the setTimeout 1");
    });
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