const checkmarks = [];
const checkboxes = document.querySelectorAll('.note');

getValueButton.addEventListener('click', function (){

  for(const checkbox in checkboxes){
    if (checkbox.checked){
    checkmarks.push(checkbox.value)
  } 
}});

points = [];
function draw() {
  if(mouseIsPressed) {
    points.push(createVector(mouseX, mouseY));
  }

  for (let index in points) {
    point(points[index]);
  }
}
