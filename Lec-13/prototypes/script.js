// let num = new Number(20);
// console.log(num)

function User(name, age, marks){
  this.name = name;
  this.age = age;
  this.marks = marks;
  // this.getPercentage = function(){
  //   let { maths, chemistry, physics } = this.marks;
  //   let totalMarks = maths + chemistry + physics;
  //   let percentage = (totalMarks/3);
  //   return percentage;
  // }
}

User.prototype.getPercentage = function(){
  let { maths, chemistry, physics } = this.marks;
  let totalMarks = maths + chemistry + physics;
  let percentage = (totalMarks/3);
  return percentage;
}

const u1 = new User("Kartik", 20, {maths: 90,chemistry: 92,physics: 80});
const u2 = new User("Abhishek", 30, {maths: 40,chemistry: 72,physics: 80});

console.log(window)
console.log(u1);
console.log(u2);

console.log("u1 percentage: ", u1.getPercentage());
console.log("u2 percentage: ", u2.getPercentage());

console.log(Array.prototype)

let arr = [1,2,3,4];

Array.prototype.pop = function(){
  console.log("Mai toh nahi kar rha pop!")
}
arr.pop();
console.log(arr)