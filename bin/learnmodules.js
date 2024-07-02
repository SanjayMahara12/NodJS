// node ./bin/learnmodules 

const path = require("node:path"); //tells to import the nodejs inbuilt modules, avoids conflicts
//const path = require("path"); 
//though this is also ok,but can cause conflicts if path exists in other modules as well

console.log(__filename);
console.log(__dirname);

console.log(path.basename(__filename));
console.log(path.basename(__dirname));

console.log(path.extname(__filename));
console.log(path.extname(__dirname));

console.log(path.parse(__filename));

console.log(path.format(path.parse(__filename))); 

console.log(path.isAbsolute(__filename)); //check if its absolute i.e full path-name file
console.log(path.isAbsolute("../data/sample.json")); 

console.log(path.join("folder1","folder2","index.html"));

//to resolve a path to an absolute path 

console.log(path.resolve("folder1","folder2","index.html"));
console.log(path.resolve("folder1","folder2","../index.html")); //last one says jump a path top
console.log(path.resolve(__dirname,"sample.json")); //_dirname already an absolute path and added another


