let input = document.getElementById("word-input");
let capture;
let vidGraphic;
// let oneBillionFrame, img1, img2, img3;
let oneBillionFrame;
let hashtag;

//Black Girl Freedom Fund Colors
let palette = ["#0E0E0E", "#FDB907", "#E647FB", "#FF6C03"];
let xPos = 20;
let yPos = 50;
let buttonPressed = false;

let shapes = [];
let shapeDef = {};
let shapeDef2 = [];

let width = 60;

let confettiColor = [],
  confetti = [];

let j = 0;
let r = 0;

let screenWidth = $(window).width();
let screenHeight = $(window).height();
// -------------check screen size phone/desktop---------------//
let ifMobile = false;
checkScreenSize();

function checkScreenSize() {
  console.log("check screen size");
  if ($(window).width() <= 600) {
    ifMobile = true;
    console.log(" is mobile");
  } else {
    ifMobile = false;
    console.log(" is desktop");
  }
}

// -------------step one: load stickers---------------//
let stickers = [];
let stickerNum = 18; //number of sticker
// -------------get main div size---------------//

let canvasDiv = document.querySelector("#canvas-div");
let canvasDivWidth = canvasDiv.offsetWidth;
let canvasDivHeight = canvasDiv.offsetHeight;

// -------------get sticker div size---------------//
let stickerDiv = document.querySelector("#sticker-div-id");
let stickerDivWidth = stickerDiv.offsetWidth;
let stickerDivHeight = stickerDiv.offsetHeight;
let stickerTop = stickerDiv.getBoundingClientRect().top; //position to top

// let size = 100;
let stickerSize = 0.25 * stickerDivWidth;
let stickerSizeMobile = 0.1374 * stickerDivWidth;

let stickerGapRMobile = 0.0326 * stickerDivWidth;
let stickerGapjMobile = 0.0326 * stickerDivWidth * 4.5;

let stickerGapR = 0.125 * stickerDivWidth;
let stickerGapj = 0.125 * stickerDivWidth * 2.2;
// let stickerGapj = 0.125 * stickerDivWidth * 1.21;

// -------------click button to save photo---------------//
document.getElementById("save-btn-id").onclick = function () {
  savePhoto();
};
document.getElementById("save-btn-id-mobile").onclick = function () {
  savePhoto();
};

function preload() {
  oneBillionFrame = loadImage("asset/OneBillionDollarsMeans.png");
  hashtag = loadImage("asset/hashtag.png");

  //---------load stickers pattern---------//
  for (let i = 0; i < stickerNum; i++) {
    let imgNames = "img" + i;
    imgNames = loadImage("asset/stickers/s" + (i + 1) + ".png");
    if (!ifMobile) {
      //layout the stickers 3*6=18
      shapeDef2.push([
        imgNames,
        r * stickerGapR + r * stickerSize,
        stickerGapj * j,
        stickerSize,
        stickerSize,
      ]);
      r++;
      if (r == 3) {
        j++;
        r = 0;
      }
    } else {
      shapeDef2.push([
        imgNames,
        r * stickerGapRMobile + r * stickerSizeMobile,
        stickerGapjMobile * j + stickerTop - 40,
        stickerSizeMobile,
        stickerSizeMobile,
      ]);
      r++;
      if (r == 6) {
        j++;
        r = 0;
      }
    }
  }
}

function setup() {
  let canvas = createCanvas(canvasDivWidth, canvasDivHeight);
  console.log(
    "box canvasDivWidth is" + canvasDivWidth + "height" + canvasDivHeight
  );
  canvas.parent("canvas-div");
  for (let i = 0; i < stickerNum; i++) {
    shapes.push(new Draggable(shapeDef2[i]));
  }
  //after save photo
  confettiColor = [color("#FDB907"), color("#E647FB"), color("#FF6C03")];
  // for (let i = 0; i < 100; i++) {
  for (let i = 0; i < 300; i++) {
    confetti[i] = new Confetti(
      // random(0, width),
      random(0, screenWidth),

      // random(0, height),
      random(0, screenHeight),

      random(-1, 1)
    );
  }
  //set up video
  vidGraphic = createGraphics(canvasDivHeight, canvasDivHeight);
  vidGraphic.background("#FDB907");
  capture = createCapture(VIDEO);
  if (!ifMobile) {
    capture.size(canvasDivHeight * 1.334, canvasDivHeight);
  } else {

  }
  //   capture.size(1240, 1240);
  capture.hide();
}

function draw() {
  // console.log(" canvasDivHeight is"+canvasDivHeight);

  // console.log("input value is" + input.value);
  // console.log("width is"+width);

  clear();
  //draw white background rect
  r = 0;
  j = 0;
  for (let i = 0; i < stickerNum; i++) {
    fill(255);
    noStroke();
    if (!ifMobile) {
      rect(
        r * stickerGapR + r * stickerSize,
        stickerGapj * j,
        stickerSize,
        stickerSize,
        20
      );
      r++;
      if (r == 3) {
        j++;
        r = 0;
      }
    } else {
      rect(
        r * stickerGapRMobile + r * stickerSizeMobile,
        stickerGapjMobile * j + stickerTop - 40,
        stickerSizeMobile,
        stickerSizeMobile,
        10
      );
      r++;
      if (r == 6) {
        j++;
        r = 0;
      }
    }
  }
  //------draw video images
  if (!ifMobile) {
    console.log("draw video in desktop");

    //flip video
    push();
    translate(canvasDivWidth, 0);
    scale(-1, 1);
    //-----the video image---//
    //32/24   =1.34   24/32=0.75
    vidGraphic.image(
      capture,
      -0.2 * canvasDivHeight,
      0,
      canvasDivHeight * 1.334,
      canvasDivHeight
    );
    // vidGraphic.image(capture, 0, 0);
    console.log(" canvasDivHeight is" + canvasDivHeight);
    image(vidGraphic, 0, 0, canvasDivHeight, canvasDivHeight);
    pop();
  } else {
    //if on mobile
    console.log("draw video in mobile");
    push();
    translate(canvasDivWidth, 0);
    scale(-1, 1);
    // vidGraphic.image(
    //   capture,
    //   -0.2 * canvasDivHeight,
    //   0,
    //   canvasDivHeight * 1.334,
    //   canvasDivHeight
    // );
    vidGraphic.image(
      capture,
      canvasDivWidth*-0.5,
      0,
      canvasDivWidth*4,
      canvasDivWidth*0.75*4
    );
    //     vidGraphic.image(
    //   capture,
    //   0,
    //   0,
    //   canvasDivWidth,
    //   canvasDivWidth*0.75
    // );
    image(vidGraphic, 0, 0, canvasDivWidth, canvasDivWidth);
    pop();
  }
  //-----the top logo---//
  if (!ifMobile) {
    image(
      oneBillionFrame,
      canvasDivWidth - canvasDivHeight,
      10,
      canvasDivHeight,
      canvasDivHeight * 0.347
    );
  } else {
    image(oneBillionFrame, 0, 10, stickerDivWidth, stickerDivWidth * 0.347);
  }

  //-----the text input---//
  fill(255);
  textSize(canvasDivWidth * 0.03);
  if (!ifMobile) {
    textSize(canvasDivWidth * 0.03);

    text(
      input.value,
      canvasDivWidth - canvasDivHeight + 20,
      canvasDivHeight * 0.85
    );
  } else {
    textSize(canvasDivWidth * 0.05);
    text(input.value, 15, canvasDivWidth * 0.87);
  }

  //-----the hashtag---//
  if (!ifMobile) {
    image(
      hashtag,
      canvasDivWidth - canvasDivHeight + 20,
      canvasDivHeight * 0.9,
      canvasDivWidth * 0.2,
      canvasDivWidth * 0.02
    );
  } else {
    image(
      hashtag,
      15,
      stickerDivWidth * 0.9,
      stickerDivWidth * 0.5,
      stickerDivWidth * 0.05
    );
  }

  //check shapes location
  for (let i = 0; i < shapes.length; i++) {
    shapes[i].over();
    shapes[i].update();
    shapes[i].show();
  }

  if (buttonPressed) {
    for (let i = 0; i < confetti.length / 2; i++) {
      confetti[i].confettiDisplay();
      if (confetti[i].y > height) {
        confetti[i] = new Confetti(
          // random(0, width),
          random(0, screenWidth),

          // random(-height, 0),
          random(-screenHeight, 0),

          random(-1, 1)
        );
      }
    }
    for (let i = int(confetti.length / 2); i < confetti.length; i++) {
      confetti[i].confettiDisplay();
      if (confetti[i].y > height) {
        confetti[i] = new Confetti(
          // random(0, width),
          random(0, screenWidth),

          // random(-height, 0),
          random(-screenHeight, 0),

          random(-1, 1)
        );
      }
    }
  }
}

//when mouse pressed, move shapes
function mousePressed() {
  for (s in shapes) {
    if (shapes[s].pressed() && shapes[s].firstClick == true) {
      shapes.push(new Draggable(shapes[s].shapeDef));
      shapes[s].firstClick = false;
    }
  }
}

function mouseReleased() {
  for (s in shapes) {
    shapes[s].released();
  }
}

function savePhoto() {
  if (!ifMobile) {
    subImg = get(
      canvasDivWidth - canvasDivHeight,
      0,
      canvasDivHeight,
      canvasDivHeight
    );
  } else {
    subImg = get(0, 0, stickerDivWidth, stickerDivWidth);
  }

  subImg.save("BGFW_Photobooth.jpg");
  buttonPressed = true;
}

// function windowResized() {
//     // resizeCanvas(windowWidth, windowHeight);
//     //rerun the canvas width height
//     canvasDivWidth = canvasDiv.offsetWidth;
//     canvasDivHeight = canvasDiv.offsetHeight;
// }

//reload the js when window resize
window.onresize = function () {
  location.reload();
  checkScreenSize(); //check screen size
  canvasDivWidth = canvasDiv.offsetWidth;
  canvasDivHeight = canvasDiv.offsetHeight;
};
