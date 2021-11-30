//trend info
let whichTheme = 0;

const title_num = ["1/4", "2/4", "3/4", "4/4"];
const title_name = [
    "BIG NESTING<br>ENERGY",
    "A LOT ON<br>OUR PLATES",
    "ME TIME,<br>ALL THE TIME",
    "BRAVE NEW<br>NECESSITIES",
];
const title_des = [
    "111An ease in restrictions meant splurging to treat ourselves and slip into something more colorful. Rejecting muted tones we injected color into our wardrobes, and our homes.",
    "222An ease in restrictions meant splurging to treat ourselves and slip into something more colorful. Rejecting muted tones we injected color into our wardrobes, and our homes.",
    "333An ease in restrictions meant splurging to treat ourselves and slip into something more colorful. Rejecting muted tones we injected color into our wardrobes, and our homes.",
    "444An ease in restrictions meant splurging to treat ourselves and slip into something more colorful. Rejecting muted tones we injected color into our wardrobes, and our homes.",
];

// 21, 9, 16, 12
const itemsDataT1 = [
    {
        name: "HAZEL BUCKET1",
        seller: "EMMA BREWIN",
        price: "$39.99",
        url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
        photo: "resources/img/products/t1.jpg",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod tempor incididunt dolor.",
    },
    {
        name: "HAZEL BUCKET1",
        seller: "EMMA BREWIN",
        price: "$39.99",
        url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
        photo: "resources/img/products/t2.jpg",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod tempor incididunt dolor.",
    },
    {
        name: "HAZEL BUCKET1",
        seller: "EMMA BREWIN",
        price: "$39.99",
        url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
        photo: "resources/img/products/t3.jpg",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod tempor incididunt dolor.",
    },
    {
        name: "HAZEL BUCKET1",
        seller: "EMMA BREWIN",
        price: "$39.99",
        url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
        photo: "resources/img/products/t4.jpg",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod tempor incididunt dolor.",
    },
    {
        name: "HAZEL BUCKET1",
        seller: "EMMA BREWIN",
        price: "$39.99",
        url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
        photo: "resources/img/product2.png",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod tempor incididunt dolor.",
    },
    {
        name: "HAZEL BUCKET1",
        seller: "EMMA BREWIN",
        price: "$39.99",
        url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
        photo: "resources/img/product1.png",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod tempor incididunt dolor.",
    },
    {
        name: "HAZEL BUCKET1",
        seller: "EMMA BREWIN",
        price: "$39.99",
        url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
        photo: "resources/img/product2.png",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod tempor incididunt dolor.",
    },
    {
        name: "HAZEL BUCKET1",
        seller: "EMMA BREWIN",
        price: "$39.99",
        url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
        photo: "resources/img/product1.png",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod tempor incididunt dolor.",
    },
    {
        name: "HAZEL BUCKET1",
        seller: "EMMA BREWIN",
        price: "$39.99",
        url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
        photo: "resources/img/product2.png",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod tempor incididunt dolor.",
    },
    {
        name: "HAZEL BUCKET1",
        seller: "EMMA BREWIN",
        price: "$39.99",
        url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
        photo: "resources/img/product1.png",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod tempor incididunt dolor.",
    },
    {
        name: "HAZEL BUCKET1",
        seller: "EMMA BREWIN",
        price: "$39.99",
        url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
        photo: "resources/img/product2.png",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod tempor incididunt dolor.",
    },

    {
        name: "HAZEL BUCKET1",
        seller: "EMMA BREWIN",
        price: "$39.99",
        url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
        photo: "resources/img/product1.png",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod tempor incididunt dolor.",
    },
    {
        name: "HAZEL BUCKET1",
        seller: "EMMA BREWIN",
        price: "$39.99",
        url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
        photo: "resources/img/product2.png",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod tempor incididunt dolor.",
    },
    {
        name: "HAZEL BUCKET1",
        seller: "EMMA BREWIN",
        price: "$39.99",
        url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
        photo: "resources/img/product1.png",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod tempor incididunt dolor.",
    },
    {
        name: "HAZEL BUCKET1",
        seller: "EMMA BREWIN",
        price: "$39.99",
        url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
        photo: "resources/img/product2.png",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod tempor incididunt dolor.",
    },
    {
        name: "HAZEL BUCKET1",
        seller: "EMMA BREWIN",
        price: "$39.99",
        url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
        photo: "resources/img/product1.png",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod tempor incididunt dolor.",
    },
    {
        name: "HAZEL BUCKET1",
        seller: "EMMA BREWIN",
        price: "$39.99",
        url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
        photo: "resources/img/product2.png",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod tempor incididunt dolor.",
    },

    {
        name: "HAZEL BUCKET1",
        seller: "EMMA BREWIN",
        price: "$39.99",
        url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
        photo: "resources/img/product1.png",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod tempor incididunt dolor.",
    },
    {
        name: "HAZEL BUCKET1",
        seller: "EMMA BREWIN",
        price: "$39.99",
        url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
        photo: "resources/img/product2.png",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod tempor incididunt dolor.",
    },
    {
        name: "HAZEL BUCKET1",
        seller: "EMMA BREWIN",
        price: "$39.99",
        url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
        photo: "resources/img/product1.png",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod tempor incididunt dolor.",
    },
    {
        name: "HAZEL BUCKET1",
        seller: "EMMA BREWIN",
        price: "$39.99",
        url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
        photo: "resources/img/product2.png",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod tempor incididunt dolor.",
    },
];
//9
const itemsDataT2 = [
    {
        name: "HAZEL BUCKET2",
        seller: "EMMA BREWIN",
        price: "$39.99",
        url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
        photo: "resources/img/product2.png",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod tempor incididunt dolor.",
    },
    {
        name: "HAZEL BUCKET2",
        seller: "EMMA BREWIN",
        price: "$39.99",
        url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
        photo: "resources/img/product2.png",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod tempor incididunt dolor.",
    },
    {
        name: "HAZEL BUCKET2",
        seller: "EMMA BREWIN",
        price: "$39.99",
        url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
        photo: "resources/img/product2.png",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod tempor incididunt dolor.",
    },
    {
        name: "HAZEL BUCKET2",
        seller: "EMMA BREWIN",
        price: "$39.99",
        url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
        photo: "resources/img/product2.png",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod tempor incididunt dolor.",
    },
    {
        name: "HAZEL BUCKET2",
        seller: "EMMA BREWIN",
        price: "$39.99",
        url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
        photo: "resources/img/product2.png",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod tempor incididunt dolor.",
    },
    {
        name: "HAZEL BUCKET2",
        seller: "EMMA BREWIN",
        price: "$39.99",
        url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
        photo: "resources/img/product2.png",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod tempor incididunt dolor.",
    },
    {
        name: "HAZEL BUCKET2",
        seller: "EMMA BREWIN",
        price: "$39.99",
        url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
        photo: "resources/img/product2.png",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod tempor incididunt dolor.",
    },
    {
        name: "HAZEL BUCKET2",
        seller: "EMMA BREWIN",
        price: "$39.99",
        url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
        photo: "resources/img/product2.png",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod tempor incididunt dolor.",
    },
    {
        name: "HAZEL BUCKET2",
        seller: "EMMA BREWIN",
        price: "$39.99",
        url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
        photo: "resources/img/product2.png",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod tempor incididunt dolor.",
    },
];
//16

const itemsDataT3 = [
    {
        name: "HAZEL BUCKET3",
        seller: "EMMA BREWIN",
        price: "$39.99",
        url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
        photo: "resources/img/product2.png",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod tempor incididunt dolor.",
    },
    {
        name: "HAZEL BUCKET3",
        seller: "EMMA BREWIN",
        price: "$39.99",
        url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
        photo: "resources/img/product2.png",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod tempor incididunt dolor.",
    },
    {
        name: "HAZEL BUCKET3",
        seller: "EMMA BREWIN",
        price: "$39.99",
        url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
        photo: "resources/img/product2.png",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod tempor incididunt dolor.",
    },
    {
        name: "HAZEL BUCKET3",
        seller: "EMMA BREWIN",
        price: "$39.99",
        url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
        photo: "resources/img/product2.png",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod tempor incididunt dolor.",
    },
    {
        name: "HAZEL BUCKET3",
        seller: "EMMA BREWIN",
        price: "$39.99",
        url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
        photo: "resources/img/product2.png",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod tempor incididunt dolor.",
    },
    {
        name: "HAZEL BUCKET3",
        seller: "EMMA BREWIN",
        price: "$39.99",
        url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
        photo: "resources/img/product2.png",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod tempor incididunt dolor.",
    },
    {
        name: "HAZEL BUCKET3",
        seller: "EMMA BREWIN",
        price: "$39.99",
        url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
        photo: "resources/img/product2.png",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod tempor incididunt dolor.",
    },
    {
        name: "HAZEL BUCKET3",
        seller: "EMMA BREWIN",
        price: "$39.99",
        url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
        photo: "resources/img/product2.png",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod tempor incididunt dolor.",
    },
    {
        name: "HAZEL BUCKET3",
        seller: "EMMA BREWIN",
        price: "$39.99",
        url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
        photo: "resources/img/product2.png",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod tempor incididunt dolor.",
    },
    {
        name: "HAZEL BUCKET3",
        seller: "EMMA BREWIN",
        price: "$39.99",
        url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
        photo: "resources/img/product2.png",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod tempor incididunt dolor.",
    },
    {
        name: "HAZEL BUCKET3",
        seller: "EMMA BREWIN",
        price: "$39.99",
        url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
        photo: "resources/img/product2.png",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod tempor incididunt dolor.",
    },
    {
        name: "HAZEL BUCKET3",
        seller: "EMMA BREWIN",
        price: "$39.99",
        url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
        photo: "resources/img/product2.png",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod tempor incididunt dolor.",
    },
    {
        name: "HAZEL BUCKET3",
        seller: "EMMA BREWIN",
        price: "$39.99",
        url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
        photo: "resources/img/product2.png",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod tempor incididunt dolor.",
    },
    {
        name: "HAZEL BUCKET3",
        seller: "EMMA BREWIN",
        price: "$39.99",
        url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
        photo: "resources/img/product2.png",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod tempor incididunt dolor.",
    },
    {
        name: "HAZEL BUCKET3",
        seller: "EMMA BREWIN",
        price: "$39.99",
        url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
        photo: "resources/img/product2.png",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod tempor incididunt dolor.",
    },
    {
        name: "HAZEL BUCKET3",
        seller: "EMMA BREWIN",
        price: "$39.99",
        url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
        photo: "resources/img/product2.png",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod tempor incididunt dolor.",
    },
];

//12

const itemsDataT4 = [
    {
        name: "HAZEL BUCKET4",
        seller: "EMMA BREWIN",
        price: "$39.99",
        url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
        photo: "resources/img/product2.png",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod tempor incididunt dolor.",
    },
    {
        name: "HAZEL BUCKET4",
        seller: "EMMA BREWIN",
        price: "$39.99",
        url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
        photo: "resources/img/product2.png",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod tempor incididunt dolor.",
    },
    {
        name: "HAZEL BUCKET4",
        seller: "EMMA BREWIN",
        price: "$39.99",
        url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
        photo: "resources/img/product2.png",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod tempor incididunt dolor.",
    },
    {
        name: "HAZEL BUCKET4",
        seller: "EMMA BREWIN",
        price: "$39.99",
        url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
        photo: "resources/img/product2.png",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod tempor incididunt dolor.",
    },
    {
        name: "HAZEL BUCKET4",
        seller: "EMMA BREWIN",
        price: "$39.99",
        url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
        photo: "resources/img/product2.png",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod tempor incididunt dolor.",
    },
    {
        name: "HAZEL BUCKET4",
        seller: "EMMA BREWIN",
        price: "$39.99",
        url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
        photo: "resources/img/product2.png",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod tempor incididunt dolor.",
    },
    {
        name: "HAZEL BUCKET4",
        seller: "EMMA BREWIN",
        price: "$39.99",
        url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
        photo: "resources/img/product2.png",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod tempor incididunt dolor.",
    },
    {
        name: "HAZEL BUCKET4",
        seller: "EMMA BREWIN",
        price: "$39.99",
        url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
        photo: "resources/img/product2.png",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod tempor incididunt dolor.",
    },
    {
        name: "HAZEL BUCKET4",
        seller: "EMMA BREWIN",
        price: "$39.99",
        url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
        photo: "resources/img/product2.png",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod tempor incididunt dolor.",
    },
    {
        name: "HAZEL BUCKET4",
        seller: "EMMA BREWIN",
        price: "$39.99",
        url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
        photo: "resources/img/product2.png",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod tempor incididunt dolor.",
    },
    {
        name: "HAZEL BUCKET4",
        seller: "EMMA BREWIN",
        price: "$39.99",
        url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
        photo: "resources/img/product2.png",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod tempor incididunt dolor.",
    },
    {
        name: "HAZEL BUCKET4",
        seller: "EMMA BREWIN",
        price: "$39.99",
        url: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
        photo: "resources/img/product2.png",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod tempor incididunt dolor.",
    },
];
const itemsData = itemsDataT1.concat(itemsDataT2, itemsDataT3, itemsDataT4);
const cataNumArray = [
    itemsDataT1.length,
    itemsDataT2.length,
    itemsDataT3.length,
    itemsDataT4.length,
];
// 21, 9, 16, 12
const cataRowNum = []; //how many rows will be there
for (let i = 0; i < 4; i++) {
    if (cataNumArray[i] % 2 == 0) {
        //even
        cataRowNum[i] = 0.5 * cataNumArray[i];
    } else {
        //odd
        cataRowNum[i] = 0.5 * (cataNumArray[i] + 1);
    }
}
console.log("cataRowNum is" + cataRowNum);

//11,5,8,6

function totalItemTemplate(item) {
    console.log("hey in totalItemTemplate");
    return `
      <div class="items clickable cardBox">
      <img class="item-photo" src="${item.photo}">
      <div class="item-des"><p class="item-name">${item.name}<br>BY ${item.seller}<br>${item.price}</p>
      <button class="purchase_btn button clickable" onclick=" window.open('${item.url}','_blank')" type="button">PURCHASE</button> 
                    

</div>
      </div>
    `;
}

function itemTemplate(item) {
    return `
        <div class="clickable detail-items">
        <img class="item-photo-detail" src="${item.photo}">
        <div class="item-des-detail"><p class="item-name-detail">${item.name}<br>BY ${item.seller}<br>${item.price}<br> <p class="item_info">${item.info}</p></p>
        <button class="purchase_btn button clickable" onclick=" window.open('${item.url}','_blank')" type="button">PURCHASE</button> 
  </div>
        </div>
      `;
}

// console.log(cataRowNum); //how mnay roles in each theme 11,5,8,6
