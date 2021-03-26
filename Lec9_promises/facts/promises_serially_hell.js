let fs = require("fs");

let pendingPromises = fs.promises.readFile("./f1.txt");

console.log(pendingPromises);

pendingPromises.then(function(data){
    console.log(data+"");
    let pendingPromises2 = fs.promises.readFile("./f2.txt");
    pendingPromises2.then(function(data){
        console.log(data+"");
        let pendingPromises3 = fs.promises.readFile("./f3.txt");
        pendingPromises3.then(function(data){
            console.log(data+"");
        })
    })
});




