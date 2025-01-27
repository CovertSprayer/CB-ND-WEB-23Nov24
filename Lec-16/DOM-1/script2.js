const heading = document.getElementsByTagName('h1')[1];
// const text = heading.innerText;
// heading.innerText = "<em>Hi there!</em>";

// const text = heading.innerHTML;
// heading.innerHTML = "<em>Hi there!</em>";

// const list = document.querySelector('ul');
// console.log(list.innerText);

// console.log(text);

// console.log(heading.getAttribute("id"))
// heading.setAttribute('payment-id', "123abcd");
// console.log(heading.hasAttribute('class'));

// const image = document.querySelector('img');
// image.setAttribute('src', 'https://plus.unsplash.com/premium_photo-1734607188058-aa9a336195a4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')

// heading.setAttribute('class', 'four');
// let classes = heading.getAttribute('class');
// classes += " four"
// console.log(classes);
// heading.setAttribute("class", classes);

heading.classList.add('four');
heading.classList.remove('three')
console.log(heading.classList.contains("four"));

const div = document.querySelector('div');
const children = div.children;
console.log(children[0])
console.log(children[1].parentElement)

const listElements = children[1].children;
console.log(listElements[0].nextElementSibling.nextElementSibling.previousElementSibling);



