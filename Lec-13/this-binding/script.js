// this (keyword) -> current context

// ==================== default
// console.log(this);

// function temp(){
//   console.log(this);
// }

// temp();

// =================== implicite

let box = {
  length: 20,
  width: 25,
  height: 30,
  volume: function(){
    return this.length * this.width * this.height;
    // console.log(this);
  }
}
// console.log(box.volume());

// ======================== explicite

let sq1 = {
  lenght: 20,
  width: 30
}

let sq2 = {
  lenght: 120,
  width: 130
}

// console.log(sq1, sq1)

function updateLength(sq, len){
  sq.lenght = len;
}

function updateLength2(len){
  this.lenght = len;
}

updateLength(sq2, 5);
// updateLength2(sq1, 2);
// console.log(sq2);
// console.log(sq1);

updateLength2.call(sq2, 2000);
// console.log(sq2);

updateLength2.apply(sq1, [5000]);
// console.log(sq1)

function updateSquare(l, w){
  this.lenght = l;
  this.width = w;
}

// updateSquare.call(sq1, 10, 10);
updateSquare.apply(sq1, [10, 10]);

// console.log(sq1);
// console.log(sq2);
// console.log(window);

// bind
function temp(){
  console.log(this);
}

// temp.call(sq1);
// temp.call(sq2);

// temp.apply(sq1);
// temp.apply(sq2);

const fun = temp.bind(sq1);
fun();

// =============== new keyword
// function createUser(name, age){
//   let user = {};
//   user.name = name;
//   user.age = age;

//   return user;
// }

function User(name, age){
  this.name = name;
  this.age = age;
}

// let u1 = createUser("Mohit", 25);
// console.log(u1);

let u2 = new User("Kartik", 20);
let u3 = new User("Varun", 25);
console.log(u2, u3);



