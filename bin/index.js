#! /usr/bin/env node

const data = require("../data/sample.json"); //can ignore the extention of the file
                                            //will try to find the .js first then .json 
const add = require("../utils/abc");
const math = require("../utils/math");
const storageinfo = require("../utils/storage");
const nodeinfo = require("../utils/nodes");
const poolinfo = require("../utils/pool");
const gridinfo = require("../utils/gridinfo");
//-----------------Operations Helper----------------------------
// node ./bin/index    //you can use just this to try below results
console.log(add(1,2) + add(2,5));
console.log(math.add(2,3));
console.log(math.substract(8,9));
console.log(data);

//--------------------------------------------------------------
//healthpac storageinfo  //to run the below results 
//storageinfo(); //for direct data print on the console 
//nodeinfo(); 
const {program}= require("commander");
program
  .command('storageinfo')
  .description('list down all the storage spaces in use or available')
  .action(storageinfo);

  program
  .command('nodeinfo')
  .description('list down all the nodes')
  .action(nodeinfo);

  program
  .command('poolinfo <poolid>')
  .description('get all the info on the grid based on the pool id passed')
  .action(poolinfo);

  program
  .command('gridinfo')
  .description('get all the info on the grid based on the pool id passed')
  .action(gridinfo);

  program.parse();