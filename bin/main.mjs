//node ./bin/main.mjs  //run this command to get the result for mjs code 
//esm6 standard style

/* 
//import math from "../utils/math-esm.mjs";  //one way exporting 

console.log(math.add(5,5)); //esm styled module used here 
console.log(math.substract(5,5));
 */

/* 
//import * as math from "../utils/math-esm.mjs"; //second way exporting , import everything with *
console.log(math.add(5,5)); //esm styled module used here 
console.log(math.substract(5,5));
 */

import {add,substract} from "../utils/math-esm.mjs"; //third way importing,only specific one needed
console.log(add(5,5)); //esm styled module used here 
console.log(substract(5,5));

