const parent  = document.getElementsByClassName('parent')[0];
const child  = document.getElementsByClassName('child')[0];
const grandChild  = document.getElementsByClassName('grand-child')[0];

// args (eventName, callback Handler, capture value)
parent.addEventListener('click', (e)=>{
  console.log("Hello from parent div");
}, false)

child.addEventListener('click', (e)=>{
  console.log("Hello from child div");
}, false)

grandChild.addEventListener('click', (e)=>{
  e.stopPropagation();
  console.log("Hello from grand-child div");
}, false)