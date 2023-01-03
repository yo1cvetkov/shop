import items from "./items.json";
import formatCurrency from "./utils/formatCurrency.js";

const IMG_URL = "https://dummyimage.com/420x260";

const storeTemplate = document.querySelector("#store-item-template");
const storeContainer = document.querySelector("[data-store-container]");

export default function storeRender() {
  items.forEach(renderItem);
}

function renderItem(item) {
  const storeItem = storeTemplate.content.cloneNode(true);

  const container = storeItem.querySelector("[data-store-item]");
  container.dataset.itemId = item.id;

  const name = storeItem.querySelector("[data-name]");
  name.innerText = item.name;

  const category = storeItem.querySelector("[data-category]");
  category.innerText = item.category;

  const image = storeItem.querySelector("[data-image]");
  image.src = `${IMG_URL}/${item.imageColor}/${item.imageColor}`;

  const price = storeItem.querySelector("[data-price]");
  price.innerText = formatCurrency(item.priceCents / 100);

  storeContainer.appendChild(storeItem);
}
