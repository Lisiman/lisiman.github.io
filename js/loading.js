//-----------loading page animation stretch--------------//
let startButton = document.getElementById("start_button");
startButton.addEventListener("click", stretchAnimation);
function stretchAnimation() {
  console.log("now animation");
  console.log("hey");
  let ele = document.getElementById("box");
  for (let i = 1; i <= 4; i++) {
    let imgEle = document.createElement("img");
    imgEle.src = `resources/img/s${i}.png`;
    imgEle.className = "imgBox";
    imgEle.style.width = document.body.clientWidth + "px";
    // imgEle.style.height =  + 'px';
    ele.append(imgEle);
  }
  let imgList = document.getElementsByClassName("imgBox");
  // window.onresize = () => {
  //     Array.from(imgList).map(ele => {
  //         ele.style.width = document.body.clientWidth + 'px';
  //     })
  // }
  Array.from(imgList).forEach((item, index) => {
    setTimeout(() => {
      item.style.width = 0;
    }, index * 1300);
  });
}

// window.onload = () => {};
