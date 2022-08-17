// The following line makes sure your styles are included in the project. Don't remove this.
import "../styles/main.scss";
// Import any additional modules you want to include below \/
import bakeData from "./data.js";

// \/ All of your javascript should go here \/
const getBakeData = JSON.parse(bakeData);
console.log(getBakeData);
const cakes = document.getElementById("cakes");
cakes.style.display = "flex";
cakes.style.gap = "12px";

const biscuits = document.getElementById("biscuits");
biscuits.style.display = "flex";
biscuits.style.gap = "12px";

const breads = document.getElementById("bread");
breads.style.display = "flex";
breads.style.gap = "12px";

const cakesData = getBakeData.cakes;
const biscuitsData = getBakeData.biscuits;
const breadData = getBakeData.bread;

const body = document.querySelector("body");
const container = document.querySelector(".container");

//setting cakes section
cakesData.reverse().forEach(cake => {
  const cakesDiv = document.createElement("div");
  cakesDiv.classList.add("card", "mb-4");
  cakesDiv.style.width = "222px";

  const cakesImg = document.createElement("img");
  cakesImg.classList.add("card-img-top");
  cakesImg.src = cake.image;
  cakesImg.style.width = "220px";
  cakesImg.style.height = "180px";

  const cakesTitle = document.createElement("h5");
  cakesTitle.classList.add("card-title", "cake-title", "mt-2", "px-2");
  cakesTitle.textContent = cake.title;

  const cakeAuthor = document.createElement("p");
  cakeAuthor.classList.add("cake-author", "border-bottom", "mx-2");
  cakeAuthor.style.width = "200px";
  cakeAuthor.textContent = cake.author;

  const cakeIng = document.createElement("div");
  cakeIng.classList.add("cake-ingredient", "mx-2", "pb-2");
  cakeIng.textContent = `Ingredients: ${cake.ingredients}`;
  cakes.append(cakesDiv);
  cakesDiv.prepend(cakesImg);
  cakesDiv.append(cakesTitle);
  cakesDiv.append(cakeAuthor);
  cakesDiv.append(cakeIng);
});

//setting biscuits section
biscuitsData.reverse().forEach(biscuit => {
  const biscuitDiv = document.createElement("div");
  biscuitDiv.classList.add("card", "mb-4");
  biscuitDiv.style.width = "222px";

  const biscuitImg = document.createElement("img");
  biscuitImg.classList.add("card-img-top");
  biscuitImg.src = biscuit.image;
  biscuitImg.style.width = "220px";
  biscuitImg.style.height = "180px";

  const biscuitTitle = document.createElement("h5");
  biscuitTitle.classList.add("card-title", "cake-title", "mt-2", "px-2");
  biscuitTitle.textContent = biscuit.title;

  const biscuitAuthor = document.createElement("p");
  biscuitAuthor.classList.add("cake-author", "border-bottom", "mx-2");
  biscuitAuthor.style.width = "200px";
  biscuitAuthor.textContent = biscuit.author;

  const biscuitIng = document.createElement("div");
  biscuitIng.classList.add("biscuit-ingredient", "mx-2", "pb-2");
  biscuitIng.textContent = `Ingredients: ${biscuit.ingredients}`;

  biscuits.append(biscuitDiv);
  biscuitDiv.prepend(biscuitImg);
  biscuitDiv.append(biscuitTitle);
  biscuitDiv.append(biscuitAuthor);
  biscuitDiv.append(biscuitIng);
});

//setting bread section
breadData.reverse().forEach(bread => {
  const breadDiv = document.createElement("div");
  breadDiv.classList.add("card", "mb-4");
  breadDiv.style.width = "222px";

  const breadImg = document.createElement("img");
  breadImg.classList.add("card-img-top");
  breadImg.src = bread.image;
  breadImg.style.width = "220px";
  breadImg.style.height = "180px";

  const breadTitle = document.createElement("h5");
  breadTitle.classList.add("card-title", "cake-title", "mt-2", "px-2");
  breadTitle.textContent = bread.title;

  const breadAuthor = document.createElement("p");
  breadAuthor.classList.add("cake-author", "border-bottom", "mx-2");
  breadAuthor.style.width = "200px";
  breadAuthor.textContent = bread.author;

  const breadIng = document.createElement("div");
  breadIng.classList.add("cake-ingredient", "mx-2", "pb-2");
  breadIng.textContent = `Ingredients: ${bread.ingredients}`;

  breads.append(breadDiv);
  breadDiv.prepend(breadImg);
  breadDiv.append(breadTitle);
  breadDiv.append(breadAuthor);
  breadDiv.append(breadIng);
});
