const baseURL = "https://dummyjson.com";

const button = document.querySelector("button");
const list = document.querySelector(".list");

async function getData(url){
  try {
    // const res = await fetch(`${baseURL}/products`);
    // const data = await res.json();
    // return data;
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

function renderProducts(products){
  products.forEach(product => {
    const li = document.createElement("li");
    li.innerText = product.title;
    list.append(li);
  });
}

button.addEventListener("click", async ()=>{
  const data = await getData(`${baseURL}/products`);
  renderProducts(data.products);
})