const btn = document.querySelector('button');
const inp = document.querySelector('input');
const parent = document.querySelector('.parent');

btn.addEventListener('click', ()=>{
  const inpValue = inp.value;
  inp.value = "";

  const newElem = document.createElement('div');
  newElem.classList.add('child');
  newElem.innerText = inpValue;
  parent.append(newElem);
})


parent.addEventListener('click', (e)=>{
  if(e.target.classList.contains('child')){
    console.log(e.target.innerText);
  }
})
