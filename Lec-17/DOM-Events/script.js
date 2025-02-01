const box = document.getElementById('box');

// box.addEventListener("click", ()=>{
//   console.log("Clicked");
// })

box.addEventListener("dblclick", ()=>{
  console.log("Double Clicked");
})

box.addEventListener("mouseenter", ()=>{
  box.style.backgroundColor = "red";
})

box.addEventListener("mouseleave", () =>{
  box.style.backgroundColor = "orange";
})

// ==================== keydown / keyup

const input = document.querySelector("input");
input.addEventListener("keydown", (e)=>{
  if(e.code == "Enter"){
    const value = input.value;
    console.log(value);
    input.value = "";
  }
  // console.log("key pressed!")
})


