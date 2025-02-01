const boxes = document.querySelectorAll('.box');

for(let box of boxes){
  box.addEventListener('mouseenter', (e)=>{
    e.target.style.backgroundColor = "red"
  })

  box.addEventListener('mouseleave', (e)=>{
    e.target.style.backgroundColor = "orange"
  })
}
