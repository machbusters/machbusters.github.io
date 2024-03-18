let img
function preload(){
  img = loadImage('2160xDark.jpg',draw);
}
function setup() {
  createCanvas(500, 500);
  image(img,20,20)
}
