#! /usr/bin/env node

const inquirer = require('inquirer');

const printFiveMoves = async (pokemonName) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    //convert the response to json 
    const pokemon = await response.json(); //await second ,wait till the data is loaded
    //console.log(pokemon);
    const moves = pokemon.moves.map(({ move }) => move.name);
    console.log(moves.slice(0, 5));
};

inquirer
    .prompt([
        {
            type: 'input',
            name: 'pokemon', //question arg
            message: 'Enter pokemon name to view its last five moves'
        },
    ])
    .then(answers => {
        printFiveMoves(answers.pokemon)
    });

//run node index.js