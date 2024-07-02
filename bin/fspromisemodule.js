const { error } = require("node:console");
const fs = require("node:fs/promises");

fs.readFile("./data/fileasync.txt", "utf-8")
    .then(data => console.log(data))
    .catch(error => console.log(error));

console.log("executing the file read , and its non-blocking , so this line will be read first.");

//using async await ..a wrapper around promisses
//for every async there is a wait
console.log("now using async await");
async function readFile() {
    try {

        const filecontent = fs.readFile("./data/file.txt", "utf-8");

        console.log((await filecontent).toString());
    }
    catch (error) {
        console.log(error.toString());

    }
}
//finally calling the async func 
readFile();


