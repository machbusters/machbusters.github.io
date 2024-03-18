function setup() {
  createCanvas(500, 500);
  loadImage('e3535c72855cb0b0819b75aa3e6fb2fe1866972a.webp',draw);
}

function draw(img) {
  img.resize(100,100)
  image(img,0,0)
}
