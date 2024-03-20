const checkmarks = [];
const checkboxes = document.querySelectorAll('.note');

getValueButton.addEventListener('click', function (){

  for(const checkbox in checkboxes){
    if (checkbox.checked){
    checkmarks.push(checkbox.value)
  } 
}});

function draw() {

}
