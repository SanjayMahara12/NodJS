const axios = require('axios');
const inquirer = require("inquirer");
const notifier = require("node-notifier");
require('dotenv').config({ path: './test.env' });

const storage_url = process.env.DATABASE_URL + 'pool';
var poolIds = [];
var inum = 0;
axios.get('http://localhost:3000/pool')
  .then(function (response) {
    // handle success
    poolIds=response.data;
    //console.table(poolIds);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });


console.log(poolIds.data);
function promptUser() {
    inquirer.prompt([
        {
            name: 'poolid',
            message: 'Choose the pool id from the table?',
            type: 'list',
            choices: [1,2,3]
        }
    ]).then(function (answer) {
        console.log(answer.poolid);
        notifier.notify({
            title:"Pool Choosen to Rebalance,"+answer.poolid.toString(),
            subtitle:"pool id choosen is",
            message:"this pool id can be used to make changes to the storage pool",
            wait:true
        });
    });
}

// Export fetchData function for reusability if needed
module.exports = promptUser;