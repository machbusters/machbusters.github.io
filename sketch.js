function setup() {
  createCanvas(500, 500);
  loadImage('2160xDark.jpg',draw);
}

function draw(img) {
  image(img,250,250,1000,1000);
}
