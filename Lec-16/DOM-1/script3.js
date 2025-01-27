const newHeading = document.createElement('h1');
newHeading.innerText = "New Heading";

console.log(newHeading);

const specialPara = document.querySelector('#special-para');
specialPara.after(newHeading);

const li = document.createElement('li');
li.innerText = "five";
console.log(li)

const numberList = document.getElementById("number-list");
numberList.append(li) //prepend, appendChild

numberList.remove();