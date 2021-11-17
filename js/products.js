const itemsDataT1 = [
    {
      name: "HAZEL BUCKET1",
      seller: "EMMA BREWIN",
      price: "$39.99",
      url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
      photo: "resources/img/product1.png",
    },
    {
      name: "HAZEL BUCKET1",
      seller: "EMMA BREWIN",
      price: "$39.99",
      url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
      photo: "resources/img/product2.png",
    },
    {
      name: "HAZEL BUCKET1",
      seller: "EMMA BREWIN",
      price: "$39.99",
      url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
      photo: "resources/img/product1.png",
    },
    {
      name: "HAZEL BUCKET1",
      seller: "EMMA BREWIN",
      price: "$39.99",
      url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
      photo: "resources/img/product2.png",
    },
    {
      name: "HAZEL BUCKET1",
      seller: "EMMA BREWIN",
      price: "$39.99",
      url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
      photo: "resources/img/product1.png",
    },
  ];
  const itemsDataT2 = [
    {
      name: "HAZEL BUCKET2",
      seller: "EMMA BREWIN",
      price: "$39.99",
      url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
      photo: "resources/img/product1.png",
    },
    {
      name: "HAZEL BUCKET2",
      seller: "EMMA BREWIN",
      price: "$39.99",
      url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
      photo: "resources/img/product2.png",
    },
    {
      name: "HAZEL BUCKET2",
      seller: "EMMA BREWIN",
      price: "$39.99",
      url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
      photo: "resources/img/product1.png",
    },
    {
      name: "HAZEL BUCKET2",
      seller: "EMMA BREWIN",
      price: "$39.99",
      url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
      photo: "resources/img/product2.png",
    },
    {
      name: "HAZEL BUCKET2",
      seller: "EMMA BREWIN",
      price: "$39.99",
      url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
      photo: "resources/img/product1.png",
    },
  ];
  const itemsDataT3 = [
    {
      name: "HAZEL BUCKET3",
      seller: "EMMA BREWIN",
      price: "$39.99",
      url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
      photo: "resources/img/product1.png",
    },
    {
      name: "HAZEL BUCKET3",
      seller: "EMMA BREWIN",
      price: "$39.99",
      url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
      photo: "resources/img/product2.png",
    },
    {
      name: "HAZEL BUCKET3",
      seller: "EMMA BREWIN",
      price: "$39.99",
      url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
      photo: "resources/img/product1.png",
    },
    {
      name: "HAZEL BUCKET3",
      seller: "EMMA BREWIN",
      price: "$39.99",
      url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
      photo: "resources/img/product2.png",
    },
    {
      name: "HAZEL BUCKET3",
      seller: "EMMA BREWIN",
      price: "$39.99",
      url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
      photo: "resources/img/product1.png",
    },
  ];
  
  const itemsData4 = [
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

  ];
  const itemsData = itemsDataT1.concat(itemsDataT2, itemsDataT3, itemsData4);
  
  function totalItemTemplate(item) {
    return `
        <div class="items clickable cardBox">
        <img class="item-photo" src="${item.photo}">
        <div class="item-des"><p class="item-name">${item.name}<br>BY ${item.seller}<br>${item.price}</p>
        <button class="purchase_btn button clickable" onclick="location.href='${item.url}'" type="button">PURCHASE</button> 
  </div>
        </div>
      `;
  }
  function itemTemplate1(item) {
      return `
          <div class="items clickable cardBox">
          <img class="item-photo" src="${item.photo}">
          <div class="item-des"><p class="item-name">${item.name}<br>BY ${item.seller}<br>${item.price}</p>
          <button class="purchase_btn button clickable" onclick="location.href='${item.url}'" type="button">PURCHASE</button> 
    </div>
          </div>
        `;
    }
  