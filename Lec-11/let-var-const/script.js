
// var a; // declaration
// a = 10; // initialization

// var b = 20; // declaration + initialization

// ======================= var
// var temp = 10;
// var temp = 30;

// console.log(temp)

// =================== let
// let temp1 = 10;
// let temp1 = 20;
// console.log(temp1)
// let temp = 40;
// console.log(temp)

// =================== const
// const temp2 = 10;
// temp2 = 30;
// const temp2 =  30;
// console.log(temp2);

function fun(){
  var a = 10;
  let a1 = 10;
  a2 = 20;

  if(true){
    console.log("a: ", a);
    console.log("a1: ", a1);
  }

  {
    var b = 20;
    let b1 = 20;
  }
  console.log("b: ", b)
  // console.log("b1: ", b1)
}

fun();
console.log(a2);  

// console.log(val);
// let val = 10;