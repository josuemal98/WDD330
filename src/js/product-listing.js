import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import { loadHeaderFooter, getParam } from "./utils.mjs";

loadHeaderFooter();

const category = getParam("category");
const searchQuery = getParam("search");
const dataSource = new ProductData();
const listElement = document.querySelector(".product-list");
const titleElement = document.querySelector(".title");

if (searchQuery) {
  if (titleElement) {
    titleElement.textContent = `Search Results for "${searchQuery}"`;
  }
  const myList = new ProductList(searchQuery, dataSource, listElement);
  myList.initSearch(searchQuery);
} else if (category) {
  if (titleElement) {
    titleElement.textContent = `Top Products: ${category.charAt(0).toUpperCase() + category.slice(1)}`;
  }
  const myList = new ProductList(category, dataSource, listElement);
  myList.init();
}