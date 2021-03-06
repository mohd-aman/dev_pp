
//output anything on console

// console.log("Hello Aman");

//compilation order
//top to down
//left to right

//Datatypes in Javascript
//Number,Boolean,String,undefined,Object and 3 more

// ES6 ECMA script 6
// let = block scoped variable
// const = block scoped variable


let a = 10;
let b = true;
let c= false;
let d = undefined;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

//variable is not assigned a value

let e;///takes up undefined
// console.log(e);

if(true){
    // let f = "I am inside if block!!!";
    // console.log(f);
    // console.log(a);
    // a=20;
}

// const = Constant

// const pi = 3.14;//define
// console.log(pi);

// console.log(10==="10");


//Objects = key value pairs
// let movies = {}; // empty object
// console.log(movies);

let data = {
    "name":" Aman",
    "place":"Queens",
    "values":[
        10,
        false,
        {
            name:"Steve Rogers",
            place:"Queens",
        },
        "Hey i am a value",
        [1,2,3,4,5,6,],
    ],
    movies:{
        name:"Captain America",
        rating:10,
    }
};
// console.log(data);

//access object keys
//dot notation -literal check
// console.log(data.name);
// console.log(data.place);

let key = "name";
data.key;
// console.log(key);  //error

//bracket notation
// console.log(data[key]);

data.name = "I am a new Value";
// console.log(data);

//key - unique
//values - duplicate override ho jaati hai 


let values = [
    10,
    false,
    {
        name:"Steve Rogers",
        place:"Queens",
    },
    "Hey i am a value",
    [1,2,3,4,5,6],
];

for(let key in data){
    console.log(key);
}