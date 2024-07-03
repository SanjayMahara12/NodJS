
const crypto = require("node:crypto"); //provides cryptographic functionality, similar to fs module

//uses libuv to do some of its tasks

//password based key derivation 2 method
//populat method to hash passwords before storing them 
//cpu intensive method and is delegate to libuv to do that 


//---------synchrounous calls test-----------------------------
let start = Date.now();
//crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
//crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512"); //time taken is almost doubled the first line
//console.log("Sync call Hash ", Date.now() - start);
//its is synchronous and blocking 
//---------Async Call test------------------------------------
const MAX_CALLS = 5;
process.env.UV_THREADPOOL_SIZE = 5 ;
start = Date.now();
for (let i = 0; i < MAX_CALLS; i++) {
    //calling the async version of the pbkdf2
    crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
        console.log(`ASync call Hash: ${i+1}`, Date.now() - start);
    });
    //so each iteration is working on separate thread by libuv taking the new thread from its thread pool

}

