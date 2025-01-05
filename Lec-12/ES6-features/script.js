// destructuring

const person = {
  e_id: 20,
  name: "Rahul",
  age: 30,
  isMarried: false
}
const names = ["Rahul" , "Varun"];

// const name = person.name;
// const age = person.age;
// const id = person.e_id;

// =================== object destructuring
const {name, age, e_id: id} = person;
console.log(name, age, id);

// =================== array destructuring
// const name1 = names[0];
// const name2 = names[1];

const [name1, name2] = names;
console.log(name1, name2);

// ========================= rest and spread operator (...)

const arr1 = [1,2,3,4];
const arr2 = [5,6,7,8];

const newArr = [...arr1, ...arr2]; // spread
console.log(newArr)

function temp(a, b, ...c){ // rest
  console.log(a, b, c);
}

temp(10, 20, 30, 40, 50);


// let a = 10;
// let b = a;

// b = b + 5;
// console.log(a, b);

// spread operator to create copy of an array or obj
let a = [10];
let b = a;
let b1 = [...a];

b[0] = b[0] + 5;
console.log(a, b, b1);

