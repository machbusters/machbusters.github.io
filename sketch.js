function setup() {
  createCanvas(1000, 1000);
  loadImage('e3535c72855cb0b0819b75aa3e6fb2fe1866972a.webp',draw);
}

function draw(img) {
  background(1000)
  img.resize(100,100)
  image(img,250,250)
}
