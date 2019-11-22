const express = require('express')
const app = express();
const port = 3000
const os = require("os");
const faker = require("faker");

console.log(`Type: ${os.type} | cpu: ${os.cpus()[0].model} | cores: ${os.cpus().length}
Total Mem: ${os.totalmem()/1e+9} Gbs | Free Mem: ${os.freemem()/1e+9} Gbs \n` );


class Person {
    constructor(){
       this.date = `${faker.random.number()*faker.random.number()}`
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
    if(a.firstName === "llllllllllllllll"){1+1}
}
let result4 = Date.now()-time4;


let b = []
for(let i = 0 ; i < num;i++){
    b.push(new Person);
}
let time5 = Date.now(); 
b.sort((x,y)=> x.date > y.date);
let result5 = Date.now()-time5;


console.log(`push ${num} objects in array = ${result1}`)

console.log(`unshift object in array of size ${num}  = ${result2}`)

console.log(`push object in array of size ${num}  = ${result3}`)

console.log(`time taken to iterate an array of size ${num}  = ${result4}`)

console.log(`time taken to sort an array of size ${num}  = ${result5}`)

console.log( a[40000])





app.listen(port, () => console.log(`listening on port ${port}!`))