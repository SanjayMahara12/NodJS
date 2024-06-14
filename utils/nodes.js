const axios = require('axios');
const table = require('tty-table');
//re-using the constants defined in the config.js file here
const {config,options} = require("./config");
//making available the env variables for access
require('dotenv').config({ path: './test.env' }) 
const storage_url = process.env.DATABASE_URL + 'node';
//this module or js file can only be used outside in the main indix.js file when we do module.exports
module.exports = function (){
// Make a request for a user with a given ID
axios.get(storage_url,config)
  .then(function (response) {
    // handle success
    //console.log(response.data);
    //console.table(response.data); //to produce result in the tabular mode
    let header = [{
        alias :"Node ID" , //for better representation of data in UI
        value: "id",
        headerColor: "cyan",
        color: "white",
        align: "left",
        width: 10
      },
      {
        alias: "Name",
        value: "name",
        color: "red",
        width: 10
      },
      ,
      {
        value: "ip",
        color: "red",
        width: 30
      }]

      const out = table(header,response.data,options).render()
      console.log(out); //prints output
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
}