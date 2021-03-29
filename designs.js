// Select color input
// Select size input
// ###################
// set up variables
// ###################
// DOM elements:
const sizePicker = document.getElementById('sizePicker');
const pixelCanvasTable = document.getElementById('pixelCanvas');
const colorPicker = document.getElementById('colorPicker');
const gridHeight = document.getElementById('inputHeight');
const gridWidth = document.getElementById('inputWidth');

// The value of the color selected needs
var defaultColor = "#0000ff";
var gridHeightVal;
var gridWidthVal;


window.addEventListener("load", startupColorPicker, false);
window.addEventListener("load", startupGridSizePicker, false);
// When size is submitted by the user, call makeGrid()

function makeGrid() {
}
// Your code goes here!
function updateColor(event) {
  var colorWell = event.target.value;
  console.log(colorWell);
}


function startupColorPicker() {
  colorPicker.value = defaultColor;
  colorPicker.addEventListener("input", updateColor(event), false);
  colorPicker.addEventListener("change", updateColor(event), false);
  colorPicker.select();
}

function updateGridSize(event) {
  gridHeightVal = gridHeight.value;
  gridWidthVal = gridWidth.value;
  console.log(gridHeightVal, gridWidthVal);
}

function startupGridSizePicker() {
  sizePicker.addEventListener('submit', updateGridSize(event){
    event.preventDefault();
  });
}


// sizePicker.addEventListener('submit', updateGridSize(event){
// event.preventDefault();
// });


// document.addEventListener("click", function(){
//   document.getElementById("demo").innerHTML = "Hello World";
// });
