const cartBtn = document.querySelector("[data-cart-button]");
const cartWrapper = document.querySelector("[data-cart-wrapper]");

export function setupShoppingCart() {}

// show / hide the cart on click

cartBtn.addEventListener("click", () => {
  cartWrapper.classList.toggle("invisible");
});
