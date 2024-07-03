const fs = require("node:fs");

const readableStream  = fs.createReadStream(__filename); //or choose any filepath
readableStream.close();

readableStream.on("close",()=>{
console.log("this is readableStream clove event callback");
});


setImmediate(()=>{console.log("setImmediate call 1");});
setTimeout(()=>{console.log("setTimeout call 1");},0);//incresing this will change its order in the calls
Promise.resolve().then(()=>{console.log("Promis.Resolve call 1");});
process.nextTick(()=>{console.log("this is process.NextTick 1");});
