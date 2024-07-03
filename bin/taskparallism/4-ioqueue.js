//io queues like fs and https 
const fs = require("node:fs");
fs.readFile(__filename, () => {
    console.log("readFile i/o queue 1");
});

process.nextTick(() => {
    console.log("this is nextTick 1");
});

Promise.resolve().then(() => {
    console.log("this is Promise.resolve 1");
});
