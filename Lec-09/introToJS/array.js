var arr = [1,2,3,4,5];
var arr2 = [1, true, 3, "hello"]

console.log(arr);
// console.log(arr2);

// console.log(arr[2]);
// console.log(arr2[1]);
// console.log(arr.length);

// arr[3] = 40;
// arr[10] = 100;

// arr.push('new_item');
// arr.pop();

// arr.shift()
// arr.unshift(1000)

// arr.splice(2, 1, 4000)

// var arr3 = arr2.concat(arr);
// var arr3 = [...arr, ...arr2]; // spread operator

// console.log(arr3)
// console.log(arr.indexOf(6));

// console.log(arr.includes(7));

// if(arr.indexOf(9) == -1){
//   console.log('Does not exist');
// }
// else{
//   console.log("Does Exist");
// }
// ====================

// if(arr.includes(9) == false){
//   console.log('Does not exist');
// }
// else{
//   console.log("Does Exist");
// }

console.log(arr.slice(1, 3 + 1))
console.log(arr.slice(2, arr.length));

var newStr = arr.join("$")
console.log(newStr);


var arr3 = [arr, arr2];

console.log(arr3);
console.log(arr3.flat());

console.log(typeof arr);
