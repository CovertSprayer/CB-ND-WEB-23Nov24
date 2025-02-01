const buttons = document.querySelectorAll('td');
const screen = document.querySelector('input');

for(let button of buttons){
  button.addEventListener('click', (e)=>{
    e.target.style.animation = "bounce 400ms ease-in-out";
    const inpText = e.target.innerText;

    try {
      if(inpText === 'C'){
        screen.value = "";
      }
      else if(inpText === "="){
        const output = eval(screen.value);
        screen.value = output;
      }
      else if(inpText === 'x'){
        screen.value += "*";
      }
      else{
        screen.value += inpText;
      }
    } catch (error) {
      screen.value = "Invalid Operation!";
    }
    


  })
}



// e.target.style.transform = "scale(0.8)";
// setTimeout(() => {
//   e.target.style.transform = "scale(1)";
// }, 200);