// // get

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// // draw a line
// ctx.moveTo(0, 0);
// ctx.lineTo(200, 200);
// ctx.stroke();

// // draw a circle
// ctx.beginPath();
// ctx.arc(95, 50, 40, 0, Math.PI / 2);
// ctx.stroke();

// // draw a Text
// ctx.font = "30px Arial";
// ctx.fillText("Hello World", 10, 50);

// ctx.strokeText("Hello World", 10, 100);

// draw image
// var img = document.getElementById("snow-mountain")
var img = document.createElement("img");
// img.src = "./images/img_snow_wide.jpg"
img.src = "/javascript-part/canvas/images/mario.jpg";

const imgTreasure = document.createElement("img");
imgTreasure.src = "/javascript-part/canvas/images/treasure.jpg";

const imgTrap = document.createElement("img");
imgTrap.src = "/javascript-part/canvas/images/trap.png";

ctx.fillStyle = "#fdfdfd"; // fill color white
ctx.fillRect(0, 0, 1000, 1000); // fill to ctx start 0,0 width 1000, height 1000

const screen = {
  width: 500,
  height: 500,
};
class Player {
  constructor(x, y, width, height, img, step) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.img = img;
    this.step = step;
  }
  moveUp = function () {
    if (this.y - this.step < 0) return;
    this.y -= this.step;
  };
  moveDown = function () {
    if (this.y + this.step + this.height > screen.height) return;
    this.y += this.step;
  };
  moveLeft = function () {
    if (this.x - this.step < 0) return;
    this.x -= this.step;
  };
  moveRight = function () {
    if (this.x + this.step + this.width > screen.width) return;
    this.x += this.step;
  };
  draw = function (ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  };
}

// const player = {
//   x: 10,
//   y: 10,
//   width: 50,
//   height: 50,
//   img,
//   step: 5,
//   moveUp: function () {
//     console.log(this.y);
//     this.y -= this.step;
//   },
//   moveDown: function () {
//     this.y += this.step;
//   },
//   moveLeft: function () {
//     this.x -= this.step;
//   },
//   moveRight: function () {
//     this.x += this.step;
//   },
//   draw: function (ctx) {
//     ctx.drawImage(player.img, player.x, player.y, player.width, player.height);
//   },
// };

const player1 = new Player(10, 10, 50, 50, img, 5);
const player2 = new Player(100, 100, 100, 100, img, 10);

const clearScreen = (ctx) => {
  ctx.fillStyle = "#fdfdfd";
  ctx.fillRect(0, 0, screen.width, screen.height);
};

const treasure = [
  new Treasure(100, 50, 50, 50, imgTreasure),
  new Treasure(200, 100, 50, 50, imgTreasure),
  new Treasure(150, 250, 50, 50, imgTreasure),
  new Treasure(350, 100, 50, 50, imgTreasure),
  new Treasure(400, 300, 50, 50, imgTreasure),
  new Treasure(000, 100, 50, 50, imgTreasure),
];
const trap = [
  new Trap(0, 50, 50, 50, imgTrap),
  new Trap(200, 150, 50, 50, imgTrap),
  new Trap(150, 250, 50, 50, imgTrap),
  new Trap(350, 200, 50, 50, imgTrap),
  new Trap(450, 350, 50, 50, imgTrap),
  new Trap(050, 150, 50, 50, imgTrap),
];

window.onload = function () {
  player1.draw(ctx);
  //   player2.draw(ctx);
  // change width height of image after 1s
  //   setTimeout(() => {
  //     ctx.fillStyle = "#FFF";
  //     ctx.fillRect(0, 0, 200, 200);
  //     ctx.drawImage(img, 50, 50, 200, 50);
  //   }, 1000);
};

document.addEventListener("keyup", (event) => {
  console.log("Event", event);

  switch (event.code) {
    case "ArrowUp":
      player1.moveUp();
      checkPlayerCollision(player1, treasure);
      break;
    case "ArrowDown":
      player1.moveDown();
      checkPlayerCollision(player1, treasure);
      break;
    case "ArrowLeft":
      player1.moveLeft();
      checkPlayerCollision(player1, treasure);
      break;
    case "ArrowRight":
      player1.moveRight();
      checkPlayerCollision(player1, treasure);
      break;
    default:
      break;
  }
});
// use function to draw screen (render) after x s

function render() {
  setInterval(() => {
    clearScreen(ctx);
    treasure.forEach((item) => item.draw(ctx));
    trap.forEach((item) => item.draw(ctx));
    player1.draw(ctx);
  }, 1);
}

// check player

function checkPlayerCollision(player, treasure) {
  treasure.forEach((item) => {
    if (player.x === item.x && player.y === item.y) {
      console.log("222");
      treasure.filter((curItem) => curItem.x !== item.x);

      console.log(treasure);
    }
  });
}

render();
