const axios = require('axios');
const inquirer = require("inquirer");
require('dotenv').config({ path: './test.env' });

const storage_url = process.env.DATABASE_URL + 'pool?1';
let poolIds = [];
var inum = 0;
async function fetchData() {
    try {
        poolIds=[];
        const response = await axios.get(storage_url);
        response.data.forEach((item) => {
            inum++;
            if(inum<=3) {
            poolIds.push(item.id)
            }
            
        });
        console.log(inum);
        // Once data is fetched, prompt the user
        promptUser();
    } catch (error) {
        console.log(error);
    }
}

function promptUser() {
    inquirer.prompt([
        {
            name: 'PoolId',
            message: 'Choose the pool id from the table?',
            type: 'list',
            choices: poolIds
        }
    ]).then(function (answer) {
        console.log(answer.choices);
    });
}

// Call fetchData to start the process
fetchData();

// Export fetchData function for reusability if needed
module.exports = fetchData;