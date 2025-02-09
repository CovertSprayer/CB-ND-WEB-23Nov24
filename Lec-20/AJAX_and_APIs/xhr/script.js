const baseURL = "https://dummyjson.com";

const button = document.querySelector("button");
const list = document.querySelector(".list");

const xhr = new XMLHttpRequest();

xhr.onerror = function(err){
  console.log(err);
}
xhr.onload = function(res){
  console.log(res);
  const data = JSON.parse(res.currentTarget.response);
  // console.log(data);
  renderProducts(data.products);
}

function renderProducts(products){
  products.forEach(product => {
    const li = document.createElement("li");
    li.innerText = product.title;
    list.append(li);
  });
}

button.addEventListener("click", async ()=>{
  xhr.open("GET", `${baseURL}/products`);
  xhr.send();
})