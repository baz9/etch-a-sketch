const adjustGrid = document.getElementById("adjust-grid");
const randomize = document.getElementById("randomize");
const gridContainer = document.querySelector(".grid-container");
const gridSquares = document.getElementsByClassName("grid");
const selectColors = document.querySelectorAll(".colors");

let color = "black";
let gridSize = 16;

selectColors.forEach(selectColor => {
    selectColor.addEventListener("click", function(e) {
        changeGridColor();
        color = e.target.dataset.color;
    })
})

adjustGrid.addEventListener("click", function() {
    gridSize = prompt("Pick the amount of rows you require between 4 and 64");
    if (gridSize >= 4 && gridSize <= 64){
        grid();
    } else {
        alert("Must be between 4 and 64 - try again");
    }
});

function changeGridColor() {
    for (let i = 0; i < gridSquares.length; i++) {
        gridSquares[i].addEventListener("mouseover", function() {
            gridSquares[i].style.backgroundColor = color;
        })
    }
}

function grid() {
    gridContainer.querySelectorAll('*').forEach(div => div.remove());
    gridContainer.innerHtml = "";
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, ${640 / gridSize}px)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, ${640 / gridSize}px)`;
    for (let i = 0; i < gridSize * gridSize; i++) {
        newGridSquare = document.createElement('div')
        gridContainer.appendChild(newGridSquare);
        newGridSquare.className = "grid";
    }
    changeGridColor();
}

randomize.addEventListener("click", function() {
    for (let i = 0; i <gridSquares.length; i++) {
        gridSquares[i].addEventListener("mouseover", function() {
            gridSquares[i].style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        })
    }
})

grid();
