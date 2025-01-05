const nums = [10,20,30,40,50];

const newNums = [];
for(let num of nums){
  newNums.push(num * 2);
}

// nums.forEach((nums) => {
//   newNums.push(num * 2);
// })

// const newNums = nums.map((num)=>{
//   return num * 2;
// })

// const newNums = nums.map(num => num * 2);
const output = nums.map((num, ind)=>{
  // console.log(num, ind)
  if(ind % 2 == 0){
    let val = num*2;
    return val;
  }
  else {
    return num;
  }
})

// console.log(output);

const students = [
  {
    id: 1,
    name: "Rahul",
    age: 20,
  },
  {
    id: 2,
    name: "Abhishek",
    age: 24,
  },
  {
    id: 3,
    name: "Varun",
    age: 30,
  }
]

const newStudents = students.map((student)=>{
  const obj = student;
  obj.age += 1;
  return obj;
})

// console.log(newStudents);

// =============== filter

const nums2 = [1,2,3,4,5];

const filteredData = nums2.filter((num) => {
  // if(num % 2 == 0){
  //   return true;
  // }
  // else{
  //   return false;
  // }
  return num%2 == 0;
})
// console.log(filteredData)

// const num = nums.find((num) => {
//   return num === 30;
// })

const varun = students.find(student => {
  return student.name === "Varun";
})

console.log(varun);

// for, for of, for in, forEach
// nums.forEach((num, ind) => {
//   console.log(num, ind);
// })

const items = [0, -3, 6, 2, 1, 13, 70];
// const str = ['h', 'a', 'b'];
// console.log(str.sort().reverse())
const sortedItems = items.sort((a, b) => b-a);

console.log(sortedItems)

const total = nums.reduce((sum, num)=> sum + num);

console.log(total)
