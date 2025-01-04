// function outerFun(){
//   var temp = 10;

//   function innerFun(){
//     temp++;
//     console.log(temp);
//   }

//   return innerFun;
// }

// var fun = outerFun();
// fun();


// ==========================

// function outerFun(){
//   var temp = 10;

//   function innerFun(){
//     temp++;
//     console.log(temp);
//   }
//   return innerFun;
// }

// var fun1 = outerFun();
// var fun2 = outerFun();

// fun1();
// fun1();
// fun2();
// fun2();
// fun1();

// ======================================
function outerFun(){
  var temp1 = 10;

  function innerFun(){
    var temp2 = 100;

    function innerMostFun(){
      temp1++;
      temp2++;
      console.log(temp1, temp2);
    }
    return innerMostFun;
  }
  return innerFun;
}

var fun = outerFun();
var fun1 = fun();
var fun2 = fun();

fun1();
fun1();
fun2();
fun2();
fun1();