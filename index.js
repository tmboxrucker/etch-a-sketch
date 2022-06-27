const gridColorDefault = '#ededed';
const gridSizeDefault = 2;

let gridColorCurrent = gridColorDefault;
let gridSizeCurrent = gridSizeDefault;

const colorInput = document.getElementById('colorPicker'); // get color by the input
const colorLabelInput = document.getElementsByClassName('colorLabel'); // get color by the color button
const sliderSize = document.getElementsByClassName('slider'); // get size by the slider
const sizeValue = document.getElementsByClassName('gridSize'); // get grid size value (A x A)
const clearGridButton = document.getElementsByClassName('clear'); // clear board (remove divs) by the clear button

colorInput.oninput = (e) => colorChange(e);
colorLabelInput.oninput = (e) => colorChange(e);

function colorChange(newInput) {
    gridColorCurrent = newInput.target.value;
}

function sizeValueChange (newInput) {
    sizeValue.item(0).innerHTML = `${newInput} x ${newInput}`;
}

function sizeChange(newInput) {
    gridSizeCurrent = newInput;
    sizeValueChange(newInput);
    clearGrid(newInput);
}

function clearGrid () {
    const squareInputVertical = document.querySelector('.grid');
    while (squareInputVertical.firstChild) {
        squareInputVertical.removeChild(squareInputVertical.firstChild)
    }
    createGrid(gridSizeCurrent);
    const pixels = document.querySelectorAll('.square');
}

function createGrid (newInput) {
    
    // square.style.display = flex;
    const squareInputVertical = document.querySelector('.grid');
    clearGrid;
    for (let i = 0; i < newInput; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.setAttribute('draggable','false');
        square.style.flex = 1;
        square.style.display = 'flex';
        square.style.flexDirection = 'column';
        // square.style.borderTop = ('1px solid black');
        // square.style.borderLeft = ('1px solid black');
        squareInputVertical.appendChild(square);
        squareInputVertical.appendChild(square);
    }
    const squareInputHorizontal = document.querySelectorAll('.square');
    squareInputHorizontal.forEach(test);
    
}
function test (test1) {
    for (let i = 0; i < gridSizeCurrent; i++) {
            const square = document.createElement('div');
            square.classList.add('square1');
            square.setAttribute('draggable','false');
            square.style.flex = 1;
            // square.style.borderBottom = ('1px solid black');
            square.addEventListener('mouseover', setColors);
            test1.appendChild(square);
            test1.appendChild(square);
        }
}

window.onload = () => {
    createGrid(gridSizeDefault);
    gridColorCurrent = '#333';
}

function setColors() {
    this.style.backgroundColor = gridColorCurrent;
}