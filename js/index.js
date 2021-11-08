const itemsData = [
  {
    name: "HAZEL BUCKET",
    seller: "EMMA BREWIN",
    price: "$39.99",
    url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
    photo: "resources/img/product1.png",
  },
  {
    name: "HAZEL BUCKET",
    seller: "EMMA BREWIN",
    price: "$39.99",
    url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
    photo: "resources/img/product2.png",
  },
  {
    name: "HAZEL BUCKET",
    seller: "EMMA BREWIN",
    price: "$39.99",
    url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
    photo: "resources/img/product1.png",
  },
  {
    name: "HAZEL BUCKET",
    seller: "EMMA BREWIN",
    price: "$39.99",
    url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
    photo: "resources/img/product2.png",
  },
  {
    name: "HAZEL BUCKET",
    seller: "EMMA BREWIN",
    price: "$39.99",
    url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
    photo: "resources/img/product1.png",
  },
  {
    name: "HAZEL BUCKET",
    seller: "EMMA BREWIN",
    price: "$39.99",
    url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
    photo: "resources/img/product2.png",
  },
  {
    name: "HAZEL BUCKET",
    seller: "EMMA BREWIN",
    price: "$39.99",
    url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
    photo: "resources/img/product1.png",
  },
  {
    name: "HAZEL BUCKET",
    seller: "EMMA BREWIN",
    price: "$39.99",
    url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
    photo: "resources/img/product2.png",
  },

  {
    name: "HAZEL BUCKET",
    seller: "EMMA BREWIN",
    price: "$39.99",
    url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
    photo: "resources/img/product1.png",
  },
  {
    name: "HAZEL BUCKET",
    seller: "EMMA BREWIN",
    price: "$39.99",
    url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
    photo: "resources/img/product2.png",
  },
  {
    name: "HAZEL BUCKET",
    seller: "EMMA BREWIN",
    price: "$39.99",
    url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
    photo: "resources/img/product1.png",
  },
  {
    name: "HAZEL BUCKET",
    seller: "EMMA BREWIN",
    price: "$39.99",
    url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
    photo: "resources/img/product2.png",
  },
  {
    name: "HAZEL BUCKET",
    seller: "EMMA BREWIN",
    price: "$39.99",
    url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
    photo: "resources/img/product1.png",
  },
  {
    name: "HAZEL BUCKET",
    seller: "EMMA BREWIN",
    price: "$39.99",
    url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
    photo: "resources/img/product2.png",
  },
  {
    name: "HAZEL BUCKET",
    seller: "EMMA BREWIN",
    price: "$39.99",
    url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
    photo: "resources/img/product1.png",
  },
  {
    name: "HAZEL BUCKET",
    seller: "EMMA BREWIN",
    price: "$39.99",
    url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
    photo: "resources/img/product2.png",
  },
  {
    name: "HAZEL BUCKET",
    seller: "EMMA BREWIN",
    price: "$39.99",
    url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
    photo: "resources/img/product1.png",
  },
  {
    name: "HAZEL BUCKET",
    seller: "EMMA BREWIN",
    price: "$39.99",
    url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
    photo: "resources/img/product2.png",
  },
  {
    name: "HAZEL BUCKET",
    seller: "EMMA BREWIN",
    price: "$39.99",
    url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
    photo: "resources/img/product1.png",
  },
  {
    name: "HAZEL BUCKET",
    seller: "EMMA BREWIN",
    price: "$39.99",
    url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
    photo: "resources/img/product2.png",
  },
  {
    name: "HAZEL BUCKET",
    seller: "EMMA BREWIN",
    price: "$39.99",
    url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
    photo: "resources/img/product1.png",
  },
  {
    name: "HAZEL BUCKET",
    seller: "EMMA BREWIN",
    price: "$39.99",
    url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
    photo: "resources/img/product2.png",
  },
  {
    name: "HAZEL BUCKET",
    seller: "EMMA BREWIN",
    price: "$39.99",
    url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
    photo: "resources/img/product1.png",
  },
  {
    name: "HAZEL BUCKET",
    seller: "EMMA BREWIN",
    price: "$39.99",
    url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
    photo: "resources/img/product2.png",
  },
];

function foods(foods) {
  return `
  <h4>Favorite Foods</h4>
  <ul class="foods-list">
  ${foods.map((food) => `<li>${food}</li>`).join("")}
  </ul>
  `;
}

function itemTemplate(item) {
  return `
      <div class="items clickable">
      <img class="item-photo" src="${item.photo}">
      <div class="item-des"><p class="item-name">${item.name}<br>BY ${item.seller}<br>${item.price}</p>
      <p class="item-price" ></p>
      <button class="purchase_btn button clickable" onclick="location.href='${item.url}'" type="button">PURCHASE</button> 
</div>
      </div>
    `;
}

document.getElementById("app").innerHTML = `
    ${itemsData.map(itemTemplate).join("")}
  `;

let itemsPicArray = document.getElementsByClassName("item-photo");
let itemsArray = document.getElementsByClassName("items");
let itemsDesArray = document.getElementsByClassName("item-des");
for (let i = 0; i <= itemsPicArray.length; i++) {
  itemsArray[i].addEventListener(
    "mouseenter",
    function (event) {
      setTimeout(function () {
        console.log("mouseover");
        itemNmouseIn = true;
        console.log(itemNmouseIn);
        itemsPicArray[i].style.display = "none";
        itemsDesArray[i].style.display = "inline";
      }, 100);
    },
    false
  );

  itemsArray[i].addEventListener(
    "mouseout",
    function (event) {
      setTimeout(function () {
        itemsPicArray[i].style.display = "inline";
        itemsDesArray[i].style.display = "none";
      }, 1300);
    },
    false
  );
}
