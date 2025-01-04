
function greet(){
  console.log("Hello!")
}

var greet2 = function(){
  console.log("Hello from greet 2")
}

var greet3 = () => {
  console.log("Hello")
}

// var output = greet();
// console.log(output)


function temp(fun){
  fun();
}

temp(greet2);