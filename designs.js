// ### Pixel Art Maker ####
// Select size input
const sizePicker = document.getElementById('sizePicker');
// ###################
// Set up variables
const gridHeightVal = 0;
const gridWidthVal = 0;
const colorWell = 0;
const table = "";
// Select color input
var DEFAULTCOLOR = "00f";
// ###################
// DOM elements:
const pixelCanvasTable = document.getElementById('pixelCanvas');
const colorPicker = document.getElementById('colorPicker');
const gridHeight = document.getElementById('inputHeight');
const gridWidth = document.getElementById('inputWidth');


// Startup event listeners after page loads
window.addEventListener("load", startupColorPicker, false);
window.addEventListener("load", startupGridSizePicker, false);


// Function definitions
function colorSquare(event) {
  event.target.style.backgroundColor = colorPicker.value;
}


// This will be called when size is submitted by the user
/**
* @description Makes a grid from width and height values passed in
* @param {number} cols
* @param {number} rows
*/
function makeGrid(cols, rows) {
  // Check to see if there is an existing grid and remove if needed
  const elements = document.getElementsByTagName('tbody')
  while (elements[0]) elements[0].parentNode.removeChild(elements[0])
  // Local scope makeGrid function element items
	const width = cols;
	const height = rows;
	let tableBody = document.createElement('tbody');
	// Use loops to construct the grid cells
	for (let x = 0; x < height; x++) {
			let gridRow = document.createElement('tr');
			tableBody.appendChild(gridRow);

			for (let y = 0; y < width; y++) {
					let gridCell = document.createElement('td');
					gridRow.appendChild(gridCell);

					tableBody.appendChild(gridRow);
					// Allows the grid color to be applied within a grid cell
          // Through a single click
					gridCell.addEventListener('mousedown', colorSquare);
			}
   	}

	// This will apply the grid to the DOM.
	pixelCanvasTable.appendChild(tableBody);
}


/**
* @description Change value of variable on color picker input/change
* @param {event} event
*/
function updateColor(event) {
  let colorWell = event.target.value;
}


/**
* @description Add listeners for the color picker
*/
function startupColorPicker() {
  // If a three-character hexcolor, make six-character
  if (DEFAULTCOLOR.length === 3) {
  	DEFAULTCOLOR = DEFAULTCOLOR.split('').map(function (hex) {
  		return hex + hex;
  	}).join('');
    // Add in the required # for the color
    DEFAULTCOLOR = ('#' + DEFAULTCOLOR);
  }

  colorPicker.value = DEFAULTCOLOR;
  colorPicker.addEventListener("input", updateColor, false);
  colorPicker.addEventListener("change", updateColor, false);
  colorPicker.select();
}


/**
* @description Update variables for grid size
* @param {event} event
*/
function updateGridSize(event) {
  event.preventDefault();
  let gridHeightVal = gridHeight.value;
  let gridWidthVal = gridWidth.value;
  makeGrid(gridWidthVal, gridHeightVal);
}


/**
* @description Add listener for the grid size form
*/
function startupGridSizePicker() {
  sizePicker.addEventListener('submit', updateGridSize);
}
