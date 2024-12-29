
// function defination
function greet(name){  // name -> parameter
  console.log(`Hello ${name}`)
}

// function calling
greet("Vaibhav"); // vaibhav -> argument


function add(num1, num2){
  var output = num1 + num2;
  return output;    // returned value
}

var num1 = 5;
var num2 = 10;
var output = add(num1, num2);
console.log(output);