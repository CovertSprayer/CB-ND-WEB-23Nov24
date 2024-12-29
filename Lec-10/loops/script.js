var nums = [10, 20, 30, 40, 50];

// console.log(nums[0]);
// console.log(nums[1]);
// console.log(nums[2]);
// console.log(nums[3]);
// console.log(nums[4]);

// for(var i=0; i<5; i++){
//   console.log("hello")
// }

// conventional loop
for(var i=0; i<nums.length; i++){
  console.log(nums[i]);
}

// for of  -> array
for(var num of nums){
  console.log(num);
}

// for in -> object
var person = {
  age: 30,
  "first Name": "Rahul",
  lastName: "Sharma"
}

for(let key in person){
  // console.log(key, person[key]);
  console.log(`${key} ${person[key]}`)
}

for(let key in nums){
  console.log(key, nums[key]);
}

// for each -> will see later

// strings
var str = `hi there!`;
var str2 = "I'm there";

var str3 = `
Hi
there,
Hor are you`
console.log(str3)