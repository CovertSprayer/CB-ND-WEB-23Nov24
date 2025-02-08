const duster = {
  width: 20,
  height: 80,
  color1: "green",
  color2: "black",
  sold: true,
  hackPC: function(){
    console.log("hi there!");
  }
}

duster.hackPC();

console.log(duster);
const data = JSON.stringify(duster);
console.log(data);
console.log(JSON.parse(data));
