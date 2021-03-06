
 
// High Order Functions => Functions which accept functions as a argument !
// Callback Functions => Functions which are passed into a function as a argument !

function getFirstName(fullName){
    fullName = fullName.split(" ");
    return fullName[0];
}

function getLastName(fullName){
    fullName = fullName.split(" ");
    return fullName[1];
}

function sayHi(fullName,fun){
    let name = fun(fullName);
    console.log(name);
}

sayHi("TONY Stark",getFirstName);
sayHi("Bruce BANNER",getLastName);