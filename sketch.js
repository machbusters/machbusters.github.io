function setup() {
  createCanvas(500, 500);
  loadImage('2160xDark.jpg',draw);
}

function draw(img) {
  img.resize(400,400);
  image(img,500,500);
}
