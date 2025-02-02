const elements = document.getElementsByClassName('child');
const btn = document.querySelector('button');
const parent = document.querySelector('.parent');
const inp = document.querySelector('input');

btn.addEventListener('click', ()=>{
  const inpValue = inp.value;
  inp.value = "";

  const newElem = document.createElement('div');
  newElem.classList.add('child');
  newElem.innerText = inpValue;
  newElem.addEventListener("click", (e)=>{
    console.log(e.target.innerText);
  })
  parent.append(newElem);
})

for(let element of elements){
  element.addEventListener('click', (e)=>{
    console.log(e.target.innerText);
  })
}
