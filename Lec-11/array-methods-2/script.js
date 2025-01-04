// map, filter, reduce, find, findIndex

const arr = [1,2,3,4,5];

const output = arr.map((val) => {
  return `<li>${val}</li>`;
})

console.log(output);


// const finalOutput = arr.map(num => num+10);

const finalOutput = arr.map((num, ind, arr) => {
  if(num % 2 == 0){
    return num*2;
  }
  else{
    return num;
  }
});

console.log(finalOutput)