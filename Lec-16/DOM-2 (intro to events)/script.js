const button = document.querySelector('button');
console.dir(button)

// button.onclick = function(){
//   a();
//   b();
// }

// function a(){
//   console.log('hello from fun 1')
// }

// function b(){
//   console.log("hello from fun 2")
// }

button.addEventListener("click", function(e){
  console.log("hello from fun 1");
  console.log(e);
})

button.addEventListener("click", function(){
  console.log("hello from fun 2")
})
