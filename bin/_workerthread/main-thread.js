/* When no separate instance of NodeJs is needed , 
i.e no process isolation is need -> no separate node instances of v8 , 
event loop and memory , 
we should consider Worker Thread Module. */


const http = require("node:http");
const { Worker } = require("node:worker_threads");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" }); //html type content 
    if (req.url === "/" || req.url === "/home") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Home page");
    }
    else if (req.url === "/aboutus") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("AboutUs");
    }
    else if (req.url === "/slowpage") {
        //here we are trying to use a new worker thread for each request
        const worker = new Worker("./worker-thread.js");
        //now we can listen the messages in the main thread using message event 
        worker.on("message", (j) => {
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end(`slow page ${j}`);
            //using multi thread in one instance to server a few request categorized to be highly
            //cpu intensive
            //pm2 is for whole applciation scaling : cluster level
            //workerthreading would be werving specific request via multiple threads.
        });

    }
    else {
        //add the http response code and return response related
        res.writeHead(404);
        res.end("Page not found"); //a http request is served and sent back with result
    }
});

server.listen(5000, () => {
    console.log("server running on port 5000");
});
