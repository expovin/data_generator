/*
var randgen = require('randgen');
let data = randgen.rvnorm(20, 50, 1, -40);
console.log(data);
*/

const rnd = require('randtools')
for(let i=0; i<20; i++){
    let normalDistNum = rnd.normal.mean(50, 15, 2);
    console.log(normalDistNum);
}
