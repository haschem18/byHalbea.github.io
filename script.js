let cart = [];
let totalPrice = 0;

function addToCart(item, price) {
  cart.push({ item, price });
  totalPrice += price;
  document.getElementById("cart-count").textContent = cart.length;
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = '';
  cart.forEach(product => {
    const li = document.createElement("li");
    li.textContent = `${product.item} - $${product.price}`;
    cartItems.appendChild(li);
  });
  document.getElementById("total-price").textContent = totalPrice;
}
