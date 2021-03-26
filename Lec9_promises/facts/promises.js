const fs = require("fs");

let pendingPromises = fs.promises.readFile("./f1.txt");

console.log(pendingPromises);

pendingPromises.then(function(data){
    console.log("Inside succes");
    console.log(data+"");
    console.log(pendingPromises);
});

pendingPromises.catch(function(error){
    console.log("Failure could not get the file");
    console.log(error);
    console.log(pendingPromises);
});

pendingPromises.finally(function(data){
    console.log(data);
    console.log("completion of promise");
})