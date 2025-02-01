const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector("#password");
// const button = document.querySelector("button");
const form = document.querySelector('form');

// button.addEventListener("click", (e)=>{
//   e.preventDefault();

//   const email = emailInput.value;
//   const password = passwordInput.value;
//   console.log(email, password);

    // emailInput.value = "";
    // passwordInput.value = "";
// })

form.addEventListener("submit", (e)=>{
  e.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;
  console.log(email, password);

  emailInput.value = "";
  passwordInput.value = "";
})

