const colors = require('colors');
const figlet = require('figlet');

console.log("hi there".green);
console.log("hello there".red);
console.log("Javascript".rainbow);


figlet("Super Mario", (err, data)=>{
  if(err) return;
  console.log(data.red);
})