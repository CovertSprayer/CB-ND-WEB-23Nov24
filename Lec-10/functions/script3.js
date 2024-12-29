
function getFruit(){

  function apple(){
    console.log("apple");
  }

  function mango(){
    console.log("mango");
  }

  return mango;
}

var tempFun = getFruit();
tempFun();

getFruit()()