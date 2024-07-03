const http = require("node:http");
const fs = require("node:fs");


const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" }) //html type content 
    //- > this works as entry point to the website
    //- > i.e something like what we do in the iis or apache server setting default html files
    //- > rest is all dependent on the HTMl and the menu and links embeded
    //- > we created a server listner 

//const html = fs.readFileSync("./ui/index.html", "utf-8");
//reading entire html file content at once is an expensive read
//storing all that content in temp buffer which is unnecessary
//better use the read stream and pipe the response
    fs.createReadStream("./ui/index.html").pipe(res); //code is more performant
    //res.end(html);
});

server.listen(5000, () => {
    console.log("server running on port 5000");
});

