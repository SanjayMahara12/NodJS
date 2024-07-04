#! /usr/bin/env node

//this is called hashbang or shebang that tells OS which interpreter to be used 
//the location of the node installation ..e.e user/bin/env


//for creting a cli tool we add a bin element in the json and give the command alias
//e.g "bin":"index.js"
//installing a package command , node install -g  ..from the project directory

const yargs = require("yargs");
//passing options to the cli
//https://pokeapi.co/
//https://pokeapi.co/api/v2/pokemon/charmander
//this async/await is just like in c# async function and inside await return

console.log(process.argv); //this mean like in .net we are accepting some arguments from CLI
/* //------OUTPUT-------
[
    'C:\\Program Files\\nodejs\\node.exe', //this is always path to interpreter
    'C:\\Users\\SanjayMahara\\AppData\\Roaming\\npm\\node_modules\\cli-tool-building\\index.js', //the CLI
    '--pokemon=charmander' //this is the argument i.e third one that we pass
  ] */

const {argv} = yargs(process.argv);//this is better approach to dissect right argument then above
//will help us in easily retrieve pokemon values

const printFiveMoves = async(pokemonName)=>{
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    //convert the response to json 
    const pokemon  = await response.json(); //await second ,wait till the data is loaded
   //console.log(pokemon);
    const moves = pokemon.moves.map(({ move })=>move.name);
    console.log(moves.slice(0,5));
};

//printFiveMoves("charmander"); //we will pick this value from CLI args
//npm install yargs
//now trying to get the pokemon name from the cli command, passing arguments
//pass CLI options 
printFiveMoves(argv.pokemon);

//run command "glass-mon --pokemon=charmander"
