// console.log(1);

// setTimeout(()=>{
//   console.log(2)
// }, 2000)

// console.log(3);

// setTimeout(() => {
//   console.log(4);
// }, 1000);

// ===========================
// console.log(1);

// setTimeout(() => {
//   console.log(2);
// }, 4000);

// setTimeout(() => {
//   console.log(3);
// }, 2000);

// console.log(4);

const id = setInterval(() => {
  console.log("Hello")
}, 2000);

setTimeout(() => {
  clearInterval(id);
}, 10000);