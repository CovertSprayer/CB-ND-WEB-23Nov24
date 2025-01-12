function getFood(cb){
  setTimeout(() => {
    //login
    console.log("food");
    cb();
  }, 2000);
}

function getDrinks(cb){
  setTimeout(()=>{
    console.log("drinks");
    cb();
  }, 3000)
}

function getSweets(cb){
  setTimeout(() => {
    console.log("sweets");
    cb();
  }, 1000);
}

// getFood(function(){
//   getDrinks(function(){
//     getSweets();
//   })
// });

getSweets(function(){
  getFood(function(){
    getDrinks(function(){
      console.log("THE END!!")
    });
  });
})

// getSweets(getFood(getDrinks()))