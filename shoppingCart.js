const cartBtn = document.querySelector("[data-cart-button]");
const cartWrapper = document.querySelector("[data-cart-wrapper]");

let shoppingCart = [];

export function setupShoppingCart() {}

// show / hide the cart on click

cartBtn.addEventListener("click", () => {
  cartWrapper.classList.toggle("invisible");
});

// add items to the cart

export function addToCart(id) {
  shoppingCart.push({ id, quantity: 1 });
  console.log(shoppingCart);
}
