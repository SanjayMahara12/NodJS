const fs = require("node:fs");

//streams extends from event emitter class 
const readStream = fs.createReadStream("./data/file.txt",{
encoding : "utf-8",
highWaterMark:2 //dealing with data in chunks of only two bytes
});

const writeStream = fs.createWriteStream("./data/file2.txt");

readStream.on("data",(chunk)=>{
console.log(chunk);
writeStream.write(chunk);
});

//when we have large file size ..streaming the data fron one file/location to another file/location
//saved time and is efficient.
//We have readable/writable/duplex/Transfor(modify while its being read and written)
