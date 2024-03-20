const checkmarks = [];
const checkboxes = document.querySelectorAll('.note');

getValueButton.addEventListener('click', function (){

  for(const checkbox in checkboxes){
    if (checkbox.checked){
    checkmarks.push(checkbox.value)
  } 
}});

var thePoints = [];
function draw() {
  if(mouseIsPressed) {
    thePoints.push(createVector(mouseX, mouseY));
  }

  for (let index in points) {
    point(thePointsoints[index]);
  }
}
