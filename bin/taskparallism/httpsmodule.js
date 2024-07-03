
const https = require("node:https"); //using https not http here
//network i/o call test for async vs sync
//this does not use the libuv module to attain task parallism 
//crypto and pbkdf2 and https are asynchronous BUT
//https doesnt seem to use the thread pool and its not affected by the number of core cpus
//https.request is network I/O operation not CPU bound 
const start = Date.now();
//---------https Call test------------------------------------
const MAX_CALLS = 10;

for (let i = 0; i < MAX_CALLS; i++) {
    https.request("https://www.google.com", (res) => {
        res.on("data", () => {});
        res.on("end", ()=> {
            console.log(`Req: ${i + 1}`, Date.now() - start);
        });
    }).end();
}

