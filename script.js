adjustGrid = document.getElementById("adjust-grid");
randomize = document.getElementById("randomize");
gridContainer = document.querySelector(".grid-container");
gridSquares = document.getElementsByClassName("grid");
let gridSize = 16;

adjustGrid.addEventListener("click", function() {
    gridSize = prompt("Pick the amount of rows you require between 4 and 64");
    if (gridSize >= 4 && gridSize <= 64){
        grid();
    } else {
        alert("Must be between 4 and 64 - try again");
    }
});

function grid() {
    gridContainer.querySelectorAll('*').forEach(div => div.remove());
    gridContainer.innerHtml = "";
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, ${640 / gridSize}px`;
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, ${640 / gridSize}px)`;
    for (let i = 0; i < gridSize * gridSize; i++) {
        newGridSquare = document.createElement('div')
        gridContainer.appendChild(newGridSquare);
        newGridSquare.className = "grid";
    }
    addClassToDiv();
}

function addClassToDiv() {
    for (let i = 0; i < gridSquares.length; i++) {
        gridSquares[i].addEventListener("mouseover", function() {
            gridSquares[i].style.backgroundColor = "red";
        })
    }
}


