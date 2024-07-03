const http = require("node:http");

const server = http.createServer((req,res)=>{
    const sampleResponse = {
        "sanme":"sanjay",
        "location":"India"
    };

//res.writeHead(200,{"Content-Type":"text/plain"}); //content type settings
//res.writeHead(200,{"Content-Type":"Application/JSON"}); //json type content 
res.writeHead(200,{"Content-Type":"text/html"}) //html type content 

//res.end(JSON.stringify("hello world")); //plaintext
//res.end(JSON.stringify(sampleResponse));
res.end(JSON.stringify("<b>Hello World</b>"))
});

server.listen(5000,()=>{
    console.log("server running on port 5000");
});

