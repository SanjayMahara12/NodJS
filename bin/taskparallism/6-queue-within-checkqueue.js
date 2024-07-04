


setImmediate(() => {
    console.log("this is setImmediate 1");
})

setImmediate(() => {
    console.log("this is setImmediate 2");
    process.nextTick(() => { console.log("this is nextTick 1") });
    Promise.resolve().then(() => {
        console.log("this is promise 1");
    });
    setTimeout(() => {
        console.log("this is setTimeout 1");
    }, 0);
});

setTimeout(() => {
    console.log("this is setTimeout 2");
}, 0);
setImmediate(() => {
    console.log("this is setImmediate 3");
});


//in the second inner portion the pirority is nextTick and Promise so the
//3rd check queue will have to wait for the second to wait.
//the settimeout will still present anomaly due to inherent delay conditions
