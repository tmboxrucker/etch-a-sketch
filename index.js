const gridColorDefault = '#fefefe';
const gridSizeDefault = 8;

let gridColorCurrent = gridColorDefault;
let gridSizeCurrent = gridSizeDefault;
let gridColorTemp;
let rainbow = false;
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (
    mouseDown = false,
    console.log(gridColorCurrent),
    gridColorCurrent = gridColorTemp,
    console.log(gridColorCurrent),
    rightHold = false);
document.body.addEventListener('contextmenu', (event) => { 
    event.preventDefault(); // removed default chrome right click
})

const colorInput = document.getElementById('colorPicker'); // get color by the input
const colorLabelInput = document.getElementById('colorLabel'); // get color by the color button
const sliderSize = document.getElementsByClassName('slider'); // get size by the slider
const sizeValue = document.getElementsByClassName('gridSize'); // get grid size value (A x A)
const clearGridButton = document.getElementsByClassName('clear'); // clear board (remove divs) by the clear button
const rainbowButton = document.getElementsByClassName('rainbowButton'); // get color button
const colorButton = document.getElementsByClassName('colorButton'); // get rainbow button

colorInput.oninput = (e) => colorChange(e);
colorLabelInput.oninput = (e) => colorChange(e);

function rainbowMode() {
    rainbow = true;
    //colorInput // greys out and removes click option
    //colorLabelInput // greys out and removes click option
    rainbowButton[0].style.opacity = '100%';
    rainbowButton[0].style.pointerEvents = 'none';
    colorButton[0].style.pointerEvents = '';
    colorButton[0].style.opacity = '0.5';
    colorInput.value = '#333333';
    colorInput.style.pointerEvents = '';
    colorInput.style.opacity = '0.5';
    colorInput.disabled = 'true';
    colorLabelInput.disabled = 'true';
    colorLabelInput.style.pointerEvents = 'none';
    colorLabelInput.style.opacity = '0.5';
}

function colorMode() {
    rainbow = false;
    gridColorCurrent = colorInput.value;
    rainbowButton[0].style.opacity = '0.5';
    rainbowButton[0].style.pointerEvents = '';
    colorButton[0].style.pointerEvents = 'none';
    colorButton[0].style.opacity = '100%';
    colorInput.style.opacity = '100%';
    colorInput.disabled = '';
    colorLabelInput.disabled = '';
    colorLabelInput.style.pointerEvents = '';
    colorLabelInput.style.opacity = '100%';
}

function colorChange(newInput) {
    gridColorCurrent = newInput.target.value;
    gridColorTemp = gridColorCurrent;
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
    squareInputHorizontal.forEach(createInnerGrid);
    
}

function createInnerGrid (newInput) {
    for (let i = 0; i < gridSizeCurrent; i++) {
        const square = document.createElement('div');
        square.classList.add('square1');
        square.setAttribute('draggable','false');
        square.style.flex = 1;
        // square.style.borderBottom = ('1px solid black');
        square.addEventListener('mouseover', setColors);
        square.addEventListener('mousedown', setColors);
        newInput.appendChild(square);
        newInput.appendChild(square);
    }
}

window.onload = () => {
    createGrid(gridSizeDefault);
    gridColorCurrent = '#333';
    colorButton[0].style.pointerEvents = 'none';
    rainbowButton[0].style.opacity = '0.5';
    gridColorTemp = gridColorCurrent;
}
let rightHold = false;
function setColors(e) {
    if (e.type == 'mouseover' && !mouseDown) {
        return;
    }
    else if (e.button == 2){
        gridColorTemp = gridColorCurrent;
        gridColorCurrent = gridColorDefault;
        this.style.backgroundColor = gridColorCurrent;
        rightHold = true;
        return;
    }
    else if (rainbow == true && rightHold == false){
        gridColorCurrent = randomColor = Math.floor(Math.random()*16777215).toString(16);
        this.style.backgroundColor = `#${gridColorCurrent}`;

        return;
    }
    this.style.backgroundColor = gridColorCurrent;
}