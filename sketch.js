function setup() {
  createCanvas(500, 500);
  loadImage('e3535c72855cb0b0819b75aa3e6fb2fe1866972a.webp',draw);
}

function draw(img) {
  img.resize(400,400);
  image(img,500,500);
}
