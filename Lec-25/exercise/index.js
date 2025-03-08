const fs = require('fs');
const path = require('path');

const finalPath1 = path.join(__dirname, "data", "input1.txt");
const finalPath2 = path.join(__dirname, "data", "input2.txt");

let d1;
let d2;

fs.readFile(finalPath1, "utf-8", (err, data1) => {
  if(err) return; 
  // console.log(data1)
  d1 = data1;
  //logic

  fs.readFile(finalPath2, "utf-8", (err, data2) => {
    if(err) return;
    // console.log(data2)
    d2 = data2;
    console.log(d1, d2);

    //logic
  })
})


// const finalData = d1 + d2;
