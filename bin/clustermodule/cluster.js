const cluster = require("node:cluster");
const http = require("node:http");
const os = require ("node:os") ;

//find out total cores one has check the below , mean that number of worker threads only 
//can be max created.
console.log(`Total cores you have is ${os.cpus().length}`);
//when we run this cluster.js in the terminal the node engine will treat this as master
//
if (cluster.isMaster) {
    console.log(`Master process ${process.pid} is running`);
    cluster.fork();
    cluster.fork();
}
else {
    const server = http.createServer((req, res) => {
        res.writeHead(200, { "Content-Type": "text/html" }); //html type content 
        //in real world we will rely on web frameworks
        //e.g express,next,hapi,koa 
        //res.end(req.url); this just returns the current url 
        //req.method gives us access to GET/POST/DELETE/PUT to do routing accordingly
        //without proper routing same page will be served despite querying any pi end point or url
        if (req.url === "/") {
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("Home page");
        }
        else if (req.url === "/aboutus") {
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("AboutUs");
        }
        else if (req.url === "/slowpage") {
            for (let i = 0; i < 600000000; i++) { } //simulate cpu work,load on cpu,intensivity
            //the slowpage will be blocking the home route and it will be unavailable to 
            //serve other request untill this is done
            //check this in the browser networks developer console
            res.writeHead(200, { "Content-Type": "text/plain" })
            res.end("slow page her");
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
}