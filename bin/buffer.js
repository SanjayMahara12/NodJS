const buffer = new Buffer.from("sanjay");
//buffer.write("mahara"); //flash the buffer with new data
console.log(buffer.toJSON()); //prints the symbol table encoding
console.log(buffer); //prints hexadecimal
console.log(buffer.toString()); //writes the string representation 
