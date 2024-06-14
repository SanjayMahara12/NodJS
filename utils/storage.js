const axios = require('axios');
require('dotenv').config({ path: './test.env' }) 
const config = {
    headers:{
        "User-Agent":"axios app"
    }
}
const storage_url = process.env.DATABASE_URL + 'storage';
module.exports = function (){
// Make a request for a user with a given ID
axios.get(storage_url,config)
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
}