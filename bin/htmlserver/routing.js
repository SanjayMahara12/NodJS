const http = require("node:http");
const fs = require("node:fs");


const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" }) ; //html type content 
    //in real world we will rely on web frameworks
    //e.g express,next,hapi,koa 
    //res.end(req.url); this just returns the current url 
    //req.method gives us access to GET/POST/DELETE/PUT to do routing accordingly
    //without proper routing same page will be served despite querying any pi end point or url
    if(req.url==="/")
       { fs.createReadStream("./ui/index.html").pipe(res); } //code is more performant
    else if(req.url==="/aboutus")  
        { fs.createReadStream("./ui/aboutus.html").pipe(res); } //code is more performant
    else if(req.url==="/api")
        {
            res.writeHead(200, { "Content-Type": "application/json" })
            const sampleResponse = {
                "sanme":"sanjay",
                "location":"India"
            };
            res.end(JSON.stringify(sampleResponse))
        }
    else 
    {
        //add the http response code and return response related
        res.writeHead(404);
        res.end("Page not found"); //a http request is served and sent back with result
    }


}); 

server.listen(5000, () => {
    console.log("server running on port 5000");
});