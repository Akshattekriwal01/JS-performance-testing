const express = require('express')
const app = express()
const port = 3000
const faker = require("faker");

console.log("hello akshat");


class Person {
    constructor(){
       this.firstName = `${faker.name.firstName()}`
       this.lastName = `${faker.name.lastName()}`
    } 

}

const num = 1000000;
let time = Date.now(); 
let a = [];
const p = new Person() 
for(let i = 0 ; i < num;i++){
    a.push(p);
}
let result1 = Date.now()-time;


let time2 = Date.now(); 
a.unshift(p);
let result2 = Date.now()-time2;

let time3 = Date.now(); 
a.push(p);
let result3 = Date.now()-time3;

let time4 = Date.now(); 
for(let i = 0 ; i < num;i++){
    if(a.firstName === "amanda"){1+1}
}
let result4 = Date.now()-time;


console.log(`push ${num} objects in array = ${result1}`)

console.log(`unshift object in array of size ${num}  = ${result2}`)

console.log(`push object in array of size ${num}  = ${result3}`)

console.log(`time taken to iterate an array of size ${num}  = ${result4}`)





app.listen(port, () => console.log(`listening on port ${port}!`))