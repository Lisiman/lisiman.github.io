const itemsData = [
  {
    name: "HAZEL BUCKET",
    seller: "EMMA BREWIN",
    type: ["SELF CARE", "SHIPPED EXPRESS"],
    url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
    photo: "resources/img/product1.png",
  },
  {
    name: "HAZEL BUCKET",
    seller: "EMMA BREWIN",
    type: ["SELF CARE", "SHIPPED EXPRESS"],
    url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
    photo: "resources/img/product2.png",
  },
  {
    name: "HAZEL BUCKET",
    seller: "EMMA BREWIN",
    type: ["SELF CARE", "SHIPPED EXPRESS"],
    url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
    photo: "resources/img/product1.png",
  },
  {
    name: "HAZEL BUCKET",
    seller: "EMMA BREWIN",
    type: ["SELF CARE", "SHIPPED EXPRESS"],
    url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
    photo: "resources/img/product2.png",
  },
  {
    name: "HAZEL BUCKET",
    seller: "EMMA BREWIN",
    type: ["SELF CARE", "SHIPPED EXPRESS"],
    url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
    photo: "resources/img/product1.png",
  },
  {
    name: "HAZEL BUCKET",
    seller: "EMMA BREWIN",
    type: ["SELF CARE", "SHIPPED EXPRESS"],
    url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
    photo: "resources/img/product2.png",
  },
  {
    name: "HAZEL BUCKET",
    seller: "EMMA BREWIN",
    type: ["SELF CARE", "SHIPPED EXPRESS"],
    url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
    photo: "resources/img/product1.png",
  },
  {
    name: "HAZEL BUCKET",
    seller: "EMMA BREWIN",
    type: ["SELF CARE", "SHIPPED EXPRESS"],
    url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
    photo: "resources/img/product2.png",
  },
  {
    name: "HAZEL BUCKET",
    seller: "EMMA BREWIN",
    type: ["SELF CARE", "SHIPPED EXPRESS"],
    url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
    photo: "resources/img/product1.png",
  },
  {
    name: "HAZEL BUCKET",
    seller: "EMMA BREWIN",
    type: ["SELF CARE", "SHIPPED EXPRESS"],
    url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
    photo: "resources/img/product2.png",
  },
  {
    name: "HAZEL BUCKET",
    seller: "EMMA BREWIN",
    type: ["SELF CARE", "SHIPPED EXPRESS"],
    url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
    photo: "resources/img/product1.png",
  },
  {
    name: "HAZEL BUCKET",
    seller: "EMMA BREWIN",
    type: ["SELF CARE", "SHIPPED EXPRESS"],
    url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
    photo: "resources/img/product2.png",
  },
  {
    name: "HAZEL BUCKET",
    seller: "EMMA BREWIN",
    type: ["SELF CARE", "SHIPPED EXPRESS"],
    url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
    photo: "resources/img/product1.png",
  },
  {
    name: "HAZEL BUCKET",
    seller: "EMMA BREWIN",
    type: ["SELF CARE", "SHIPPED EXPRESS"],
    url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
    photo: "resources/img/product2.png",
  },
  {
    name: "HAZEL BUCKET",
    seller: "EMMA BREWIN",
    type: ["SELF CARE", "SHIPPED EXPRESS"],
    url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
    photo: "resources/img/product1.png",
  },
  {
    name: "HAZEL BUCKET",
    seller: "EMMA BREWIN",
    type: ["SELF CARE", "SHIPPED EXPRESS"],
    url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
    photo: "resources/img/product2.png",
  },
  {
    name: "HAZEL BUCKET",
    seller: "EMMA BREWIN",
    type: ["SELF CARE", "SHIPPED EXPRESS"],
    url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
    photo: "resources/img/product1.png",
  },
  {
    name: "HAZEL BUCKET",
    seller: "EMMA BREWIN",
    type: ["SELF CARE", "SHIPPED EXPRESS"],
    url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
    photo: "resources/img/product2.png",
  },
  {
    name: "HAZEL BUCKET",
    seller: "EMMA BREWIN",
    type: ["SELF CARE", "SHIPPED EXPRESS"],
    url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
    photo: "resources/img/product1.png",
  },
  {
    name: "HAZEL BUCKET",
    seller: "EMMA BREWIN",
    type: ["SELF CARE", "SHIPPED EXPRESS"],
    url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
    photo: "resources/img/product2.png",
  },
  {
    name: "HAZEL BUCKET",
    seller: "EMMA BREWIN",
    type: ["SELF CARE", "SHIPPED EXPRESS"],
    url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
    photo: "resources/img/product1.png",
  },
  {
    name: "HAZEL BUCKET",
    seller: "EMMA BREWIN",
    type: ["SELF CARE", "SHIPPED EXPRESS"],
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
      <div class="item-des"><p class="item-name">${item.name}<br>BY ${item.seller}</p>
      <p class="item-type" >${item.type} </p></div>
      <button class="purchase_btn button clickable" onclick="location.href='${item.url}'" type="button">PURCHASE</button>
      </div>
    `;
}

document.getElementById("app").innerHTML = `
    ${itemsData.map(itemTemplate).join("")}
  `;

let itemsPicArray = document.getElementsByClassName("item-photo");
let itemsArray = document.getElementsByClassName("items");
let itemNmouseIn = false;

// console.log(itemsArray);
for (let i = 0; i <= itemsPicArray.length; i++) {
  // console.log(i);
  itemsArray[i].addEventListener(
    "mouseenter",
    function (event) {
      setTimeout(function () {
        console.log("mouseover");
        itemNmouseIn = true;
        console.log(itemNmouseIn);
        itemsPicArray[i].style.display = "block";
      }, 100);
    },
    false
  );

  itemsArray[i].addEventListener(
    "mouseout",
    function (event) {
      setTimeout(function () {
        itemsPicArray[i].style.display = "none";
      }, 1300);
    },
    false
  );
}
// itemsArray[0].addEventListener(
//   "mouseenter",
//   function (event) {
//     setTimeout(function () {
//       console.log("mouseover");
//       itemNmouseIn = true;
//       console.log(itemNmouseIn);
//       itemsPicArray[0].style.display = "block";
//     }, 100);
//   },
//   false
// );

// itemsArray[0].addEventListener(
//   "mouseout",
//   function (event) {
//     setTimeout(function () {
//       itemsPicArray[0].style.display = "none";
//     }, 1000);
//   },
//   false
// );
