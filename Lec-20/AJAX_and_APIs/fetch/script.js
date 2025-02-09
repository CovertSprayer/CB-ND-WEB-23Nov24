const baseURL = "https://dummyjson.com";

const button = document.querySelector("button");
const list = document.querySelector(".list");

button.addEventListener("click", async ()=>{
  const res = await fetch(`${baseURL}/products`);
  const data = await res.json();
  console.log(data);

  for(let product of data.products){
    const li = document.createElement("li");
    li.innerText = product.title;
    list.append(li);
  }
})

// fetch(URL, {
//   method: "POST",
//   headers: {},
//   data: {},
// })