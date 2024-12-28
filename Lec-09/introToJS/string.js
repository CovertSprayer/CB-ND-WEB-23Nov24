var a = 'a';
var b = "a";

// console.log(a, typeof a);
// console.log(b, typeof b);

var str = 'Hi THere!';
var img = "photo.png";

// console.log(str[1])
// var newStr = str.toUpperCase();
// var newStr = str.toLowerCase();

console.log(str)
// console.log(newStr);

var menu = ["Chole Bhature", "Pav Bhaji", "Dosa"];

// console.log(menu[1].toLowerCase() == "pav bhaji");
// console.log(str.split(" "));
// console.log(img.split(".").pop());

console.log(str.replace('H', 'h'));
console.log(str.replaceAll('H', 'h'));

var s = "This is some random string";
console.log(s.replace(" ", "-"))
console.log(s.replaceAll(" ", "-"))

var data = ["rahul.png", "rahul.pdf", "manish.jpeg", "jpg.pdf", "rahul.yadav.png"];

// for(var i=0; i<data.length; i++){
//   var temp = data[i].split(".");
//   if(temp.pop().toLowerCase() == "png"){
//     console.log("Valid")
//   }
//   else{
//     console.log("Invalid")
//   }
// }

var variable = "      Salman Khan       ";
console.log(variable.trim());

console.log(str.substring(1, str.length))