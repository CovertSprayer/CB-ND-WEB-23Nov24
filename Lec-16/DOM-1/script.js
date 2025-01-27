/*
const headings = document.getElementsByTagName('h1');
console.log(headings) // html collection
console.log(headings[0])
headings[0].style.color = "red";
headings[0].style.backgroundColor = "yellow";

// for(const heading of headings){
//   heading.style.color = 'green';
// }

const para = document.getElementsByTagName('p');

const lis = document.getElementsByClassName('special');
console.log(lis);

for(const li of lis){
  li.style.color = 'green';
}

const specialPara = document.getElementById('special-para');
console.log(specialPara);
specialPara.style.border = '2px solid blue';

*/

const heading = document.querySelector("h1");
const specialPara = document.querySelector("#special-para");
const listItems = document.querySelectorAll(".special");

console.log(listItems)
specialPara.style.color = "red";
listItems[1].style.border = "2px solid red";

console.log(heading);