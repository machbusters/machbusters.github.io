function setup() {
  createCanvas(500, 500);
  loadImage('2160xDark.jpg',draw);
}

function draw(img) {
  image(img,400,400,1000,1000);
}
