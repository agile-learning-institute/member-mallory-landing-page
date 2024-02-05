//variables to target the specific selectors from the html
const gridContainer = document.querySelector("#grid-container");
const userValue = document.querySelector("#user-number");
const userSubmit = document.querySelector("#user-submit");
const promptText = document.querySelector("#prompt");
const copyInput = document.querySelector("#copy-input");
const clearButton = document.querySelector("#clear-button");

//to activate all of the user's functionality w/ created functions
userValue.addEventListener("focus", userHint);
userValue.addEventListener("keyup", duplicateGrid);
userSubmit.addEventListener("click", makeGrid);
clearButton.addEventListener("click", clearGrid);

//on page load these functions will create the default grid
makeGrid();
draw();

//indicates to user that it is a square grid for input purposes
function duplicateGrid() {
  let userGrid = userValue.value;
  copyInput.textContent = "x " + userGrid;
}

//hint to the user
function userHint() {
  promptText.textContent = "Enter a number between 2 and 99.";
}

//makes nested divs that are organized into a grid using CSS flexbox
//invalid entries receive a warning, default grid is 16 x 16, or else it is a user defined resolution
function makeGrid() {
  let number = userValue.value;
  if (number < 0 || number > 99 || isNaN(number)) {
    promptText.textContent = "Make sure this is a number between 2 and 99";
  } else {
    promptText.textContent = "";
    copyInput.textContent = "";
    userValue.value = "";
    gridContainer.innerHTML = "";
    if (number === 0 || number > 99 || number === "") {
      for (let i = 0; i < 16; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        gridContainer.appendChild(row);
        for (let j = 0; j < 16; j++) {
          let column = document.createElement("div");
          column.classList.add("column");
          row.appendChild(column);
        }
      }
    } else {
      for (let i = 0; i < number; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        gridContainer.appendChild(row);
        for (let j = 0; j < number; j++) {
          let column = document.createElement("div");
          column.classList.add("column");
          row.appendChild(column);
        }
      }
    }
  }
  draw();
}


function draw() {
  let columns = document.getElementsByClassName("column");

  for (let i = 0; i < columns.length; i++) {
    columns[i].addEventListener("mouseover", changeColor);
    
  }

function changeColor() {
    let blackRadio = document.querySelector("#black-pen");
    let redRadio = document.querySelector("#red-pen");
    let blueRadio = document.querySelector("#blue-pen");
    let rainbow = document.querySelector("#rainbow-pen");
    let eraserRadio = document.querySelector('#eraser');

    if (blackRadio.checked) {
      this.style.backgroundColor = "#2e2b2b";
    } else if (redRadio.checked) {
      this.style.backgroundColor = "#da2d2d";
    } else if (blueRadio.checked) {
      this.style.backgroundColor = "#3f33dd";
    } else if (eraserRadio.checked) {
        this.style.backgroundColor = "";
    } else if (rainbow.checked) {
      //pick a value from complete black to complete white at random; to string to achieve a hex code
      let randomColor = Math.floor(Math.random() * 16777215).toString(16);
      this.style.backgroundColor = "#" + randomColor;
    }
  }
};


function clearGrid() {
  let columns = document.getElementsByClassName("column");
  for (let i = 0; i < columns.length; i++) {
    columns[i].style.backgroundColor = "";
  }
}
