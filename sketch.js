let img;
function preload(){
  img = loadImage('2160xDark.jpg',draw);
}
function setup() {
  createCanvas(500, 500);
  img.resize(400,400);
  image(img,250,250,400,400);
}
