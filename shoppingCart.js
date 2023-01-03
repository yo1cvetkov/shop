import items from "./items.json";
import formatCurrency from "./utils/formatCurrency.js";

const cartBtn = document.querySelector("[data-cart-button]");
const cartWrapper = document.querySelector("[data-cart-wrapper]");
const cartItemTemplate = document.querySelector("#cart-item-template");
const cartItemContainer = document.querySelector("[data-cart-items-container]");

const IMG_URL = "https://dummyimage.com/210x130";

let shoppingCart = [];

export function setupShoppingCart() {}

// show / hide the cart on click

cartBtn.addEventListener("click", () => {
  cartWrapper.classList.toggle("invisible");
});

// add items to the cart

export function addToCart(id) {
  shoppingCart.push({ id: id, quantity: 1 });
  renderCart();
}

function renderCart() {
  shoppingCart.forEach((entry) => {
    const item = items.find((i) => entry.id === i.id);

    const cartItem = cartItemTemplate.content.cloneNode(true);

    const container = cartItem.querySelector("[data-item]");
    container.dataset.itemId = item.id;

    const name = cartItem.querySelector("[data-name]");
    name.innerText = item.name;

    const image = cartItem.querySelector("[data-image]");
    image.src = `${IMG_URL}/${item.imageColor}/${item.imageColor}`;

    const quantity = cartItem.querySelector("[data-quantity]");
    quantity.innerText = `x${entry.quantity}`;

    const price = cartItem.querySelector("[data-price]");
    price.innerText = formatCurrency((item.priceCents * entry.quantity) / 100);

    cartItemContainer.appendChild(cartItem);
  });
}
