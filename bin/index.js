#! /usr/bin/env node

const storageinfo = require("../utils/storage");
const nodeinfo = require("../utils/nodes");
const poolinfo = require("../utils/pool");
const gridinfo = require("../utils/gridinfo");
const add = require("../utils/abc");
console.log(add(1,2) + add(2,5));
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