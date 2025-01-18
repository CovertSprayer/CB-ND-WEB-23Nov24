// intro to promise

// randomNumber = 1,2,3,5

const p = new Promise((resolve, reject)=>{
  const randomNum = Math.round(Math.random()*10)
  if(randomNum > 5){
    resolve(randomNum);
  }
  else{
    reject(randomNum);
  }
})

p.then((num)=>{
  console.log("Promise resolved!", num)
}).catch((num)=>{
  console.log("Promise rejected", num)
})
