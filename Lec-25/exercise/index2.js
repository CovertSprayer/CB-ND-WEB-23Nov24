const fs = require('fs');
const path = require('path');

function readFile(fileName){
  const filePath = path.join(__dirname, "data", fileName);
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf-8", (err, data)=>{
      if(err) reject(err);
      resolve(data);
    })
  })
}

function writeFile(fileName, data){
  const filePath = path.join(__dirname, "data", fileName);
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, data, (err)=>{
      if(err) reject();
      resolve();
    })
  })
}

async function main(){
  try {
    const data1 = await readFile("input1.txt");
    const data2 = await readFile("input2.txt");

    const arr1 = data1.split("\n");
    const arr2 = data2.split("\n");
    const arr = [...arr1, ...arr2];

    arr.sort((a, b) => a-b);

    const finalData = arr.join("\n");

    await writeFile("output.txt", finalData);
    console.log("Success!!");
    
  } catch (error) {
    console.log("Something went wrong", error)
  }
}

main();