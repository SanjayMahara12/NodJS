# NodJS

Axios  - for calling different apis <br/>
chalk  - for beautifying console output <br/>
commander - gives different options and commands in the CLI , helps to create commands <br/>
Inquirer  - for getting user input  <br/>
Node Notifier - send desktop notifications <br/>
Tty Table     - to format the output table <br/>

- npm init    //command to set up npm project for nodejs <br/>
             //its will ask package name , asked by inquirer module/package<br/>
            //and the command we pass to the console is decrypted by the commander module<br/>
           //<br/><br/>
- npm install axios chalk commander inquirer node-notifier tty-table<br/>
- add a folder called bin //update the mapping in package.json for index file to this location
- "bin":{<br/>
    "healthpac": "./bin/index.js"<br/>
  } //adding this in the package.json to tell a command name and where this command should go<br/>
<br/><br/>
- npm install -g nodemon // automatically restarts the node application when file changes in the directory are detected.<br/>
- node ./bin/index.js  //this will print the data due to lines storageinfo() call<br/>
- node ./bin/index.js storageinfo //this is direct and specific function call rather than having to print     every dataset <br/>
- we have placed a command info in the package .json i.e "healthpac": "./bin/index.js" <br/>
  now to run this command and use this command we need to do <br/>
  - npm install -g .           <br/>

//if we have any utility of js file with multiple modules or functions in it we can decide to select only the required ones e.g in out config.js we have two globally available export functions/blocks and we can choose like the following to select the one we intend to use in desired part of the code<br/>
const {config,options} = require("./config"); <br/>
const {program}= require("commander");<br/> //as we used in the index.js for the commander npm package 
<br/><br/>
- #! /usr/bin/env node   //add this line at the top of the index.js file to tell that that this code will run via user/bin env path else the command healpac will not be taken as the clr command<br/>
- npm install -g .   //one the env update for command is done then this line is needed to run again<br/>

- healthpac storageinfo  //this will do the same as "node ./bin/index.js storageinfo" but as a command <br/>
- healthpac poolinfo 1  //calling a parameterised data  <br/>
- add the node-notifier for any notification to subscribe to  <br/>
    const notifier = require('node-notifier'); <br/>
 // String <br/>
 notifier.notify('Message'); <br/>
 // Object <br/>
 notifier.notify({ <br/>
 title: 'My notification', <br/>
 message: 'Hello, there!' <br/>
 }); <br/> <br/>

