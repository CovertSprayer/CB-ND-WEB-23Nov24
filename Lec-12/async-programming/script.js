console.log(1);

delay(3);

console.log(2);

function delay(time){
  const currTime = new Date().getTime();

  while(new Date().getTime() < currTime + time*1000 ){

  }
} 