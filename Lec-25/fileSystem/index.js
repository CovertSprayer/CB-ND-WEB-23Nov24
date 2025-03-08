const fs = require('fs');
const path = require('path');

// console.log(__dirname);
// console.log(process.cwd())

const data = "Hi there!!";

// const filePath = __dirname + '/' + "data.txt";
const filePath = path.join(__dirname, "data.txt");

// fs.writeFile(filePath, data, (err)=>{
//   if(err){
//     console.log("Something went wrong!");
//     return;
//   }
//   console.log("file written successfully!");
//   // logic
// })

fs.readFile(filePath, "utf-8", (err, data)=>{
  if(err){
    console.log("something went wrong in reading file!");
    return;
  }

  console.log(data);
  // logic
})