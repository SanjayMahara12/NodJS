
const fs = require("node:fs");
const zlib = require("node:zlib"); //has a built-in transform stream 
const gzip = zlib.createGzip();
//streams extends from event emitter class 
const readStream = fs.createReadStream("./data/file.txt",{
encoding : "utf-8",
highWaterMark:2 //dealing with data in chunks of only two bytes
});

const writeStream = fs.createWriteStream("./data/file2.txt"); 
readStream.pipe(writeStream);//good pipe but not chaining pattern
//pipes provide chaining method
//here instead of adding a event listner "on" we directly connected a write stream to the
//read stream so to keep writing the chunks as recieved to the writestream
//enables chaining as well if destination stream is duplex,redable or a transform stream as below
readStream.pipe(gzip).pipe(fs.WriteStream("./data/filepipe.txt.gz")); //chaining with .pipe

