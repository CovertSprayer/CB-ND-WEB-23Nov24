

document.addEventListener("click", (e) => {
  if(e.target.classList.contains("fa-heart")){
    const productId = e.target.getAttribute("productId");
    console.log(productId);
    updateWishList(productId);
  }
})

async function updateWishList(productId){
  try {
    const res = await axios.post(`api/products/${productId}/wishlist`, {}, {
      headers: {'X-Requested-With': 'XMLHttpRequest'}
    });
    console.log(res.data);
  } catch (error) {
    if(error.response.status == 401)
      window.location.replace("/login");
  }
}