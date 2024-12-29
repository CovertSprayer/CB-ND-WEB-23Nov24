var a = {
  "x":5,
  y:10,
  z: [1,2,3,4]
}

console.log(a);
console.log(a.x) // a["x"];
console.log(a["y"]) // a.x;
console.log(a["z"]) // a.z;

var person = {
  age: 30,
  "first Name": "Rahul",
  lastName: "Sharma"
}

console.log(person["first Name"])
person.age = 35;
console.log(person)