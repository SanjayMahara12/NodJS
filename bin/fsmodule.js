const fs = require("node:fs");

//read file async ..recommended approach
const fileContentAsync = fs.readFile("./data/fileasync.txt","utf-8",(error,data)=> {
    console.log("reading file async");
 if(error)
    console.log(error);
else console.log(data)
});

//write file async ..also adding a flag would change the file write mode ..recommended approach to write
fs.writeFile("./data/fileasync.txt","|we need a new place",{flag:"a"},(error) =>{
if(error) console.log(error);
else console.log("file async write completed");
});

//read file sync
const fileContent = fs.readFileSync("./data/file.txt","utf-8");
console.log(fileContent);
//write file sync
fs.writeFileSync("./data/file.txt","we go to vacations");
