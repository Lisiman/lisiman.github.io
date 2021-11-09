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
  ${ foods.map((food) => `<li>${ food }</li>`).join("") }
  </ul>
  `;
}

function itemTemplate(item) {
    return `
      <div class="items clickable cardBox">
      <img class="item-photo" src="${ item.photo }">
      <div class="item-des"><p class="item-name">${ item.name }<br>BY ${ item.seller }<br>${ item.price }</p>
      <button class="purchase_btn button clickable" onclick="location.href='${ item.url }'" type="button">PURCHASE</button> 
</div>
      </div>
    `;
}

document.getElementById("app").innerHTML = `
    ${ itemsData.map(itemTemplate).join("") }
  `;
let itemsDesArray = document.getElementsByClassName("cardBox");
Array.from(itemsDesArray).map((ele, idx) => {
    let event = ['onmouseenter', 'onmouseleave'];
    ele.status = true;
    event.map(item => {
        ele[item] = ev => {
            let ele = ev.target.children[0];
            if (!ele) return
            ele.status = !ele.status;
            ele.style.display = ele.status ? 'none' : 'block';
        }
    })
})
