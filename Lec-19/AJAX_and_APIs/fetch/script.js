// fetch(url)
//   .then((res)=>{
//     return res.json();
//   })
//   .then((data)=>{
//     console.log(data);
//   })
//   .catch(err => console.log(err));

async function getData(url){
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

const list = document.querySelector('.list');
const btn = document.querySelector("button");

btn.addEventListener('click', ()=>{
  main();
})

async function main(){
  const data = await getData("https://dummyjson.com/products");
  // console.log(data.products);
  list.innerHTML = "";
  data.products.forEach(product => {
    const li = document.createElement("li");
    li.innerText = product.title;
    list.append(li);
  });
}
