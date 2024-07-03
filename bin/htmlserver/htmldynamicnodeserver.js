const http = require("node:http");
const fs = require("node:fs");


const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" }) //html type content 
    //reading the html and adding content to it dyncmically
    const name = "sanjay mahara"
    let html = fs.readFileSync("./ui/index.html","utf-8");
    //we used let instead of the const here as we do not want readonly variable
    //as we are working upon the html and modifying it we use let
    html = html.replace("{{name}}",name);
    //fs.createReadStream("./ui/index.html").pipe(res); //code is more performant
    res.end(html);
}); 

server.listen(5000, () => {
    console.log("server running on port 5000");
});

