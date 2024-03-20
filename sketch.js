const checkmarks = [];
const checkboxes = document.querySelectorAll('.note');

getValueButton.addEventListener('click', function (){

  for(const checkbox in checkboxes){
    if (checkbox.checked){
    checkmarks.push(checkbox.value)
  } 
}});

function setup() {
  createCanvas(1000, 1000)
}

var thePoints = [];
function draw() {
  background(220);
  if(mouseIsPressed) {
    thePoints.push(createVector(mouseX, mouseY));
  }

  for (let index in thePoints) {
    point(thePoints[index]);
  }
}
