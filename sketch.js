function setup() {
  createCanvas(500, 500);
  loadImage('2160xDark.jpg',draw);
}

function draw(img) {
  img.resize(100,100);
  image(img,400,400);
}
