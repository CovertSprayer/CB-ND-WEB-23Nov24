const fs = require('fs/promises');
const path = require('path');

const filePath = path.join(__dirname, "data.txt");

async function main(){
  try {
    const data = await fs.readFile(filePath, "utf-8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

main();