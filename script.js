const adjustGrid = document.getElementById("adjust-grid");
const randomize = document.getElementById("randomize");
const gridContainer = document.querySelector(".grid-container");
const gridSquares = document.getElementsByClassName("grid");

document.getElementById("red").addEventListener("click", () => color = "red");
document.getElementById("orange").addEventListener("click", () => color = "orange");
document.getElementById("yellow").addEventListener("click", () => color = "yellow");
document.getElementById("lime").addEventListener("click", () => color = "rgb(136, 255, 0)");
document.getElementById("green").addEventListener("click", () => color = "rgb(0, 255, 21)");
document.getElementById("aqua").addEventListener("click", () => color = "aqua");
document.getElementById("blue").addEventListener("click", () => color = "blue");
document.getElementById("purple").addEventListener("click", () => color = "rgb(111, 0, 255)");
document.getElementById("pink").addEventListener("click", () => color = "rgb(234, 0, 255)");
document.getElementById("bright-pink").addEventListener("click", () => color = "rgb(255, 0, 170)");
document.getElementById("pinkRed").addEventListener("click", () => color = "rgb(255, 0, 76)");
document.getElementById("white").addEventListener("click", () => color = "white");
document.getElementById("grey").addEventListener("click", () => color = "grey");
document.getElementById("slate").addEventListener("click", () => color = "rgb(66, 66, 66)");
document.getElementById("black").addEventListener("click", () => color = "black");

let color = "black";
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
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, ${640 / gridSize}px)`;
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
            gridSquares[i].style.backgroundColor = color;
        })
    }
}

randomize.addEventListener("click", function() {
    for (let i = 0; i <gridSquares.length; i++) {
        gridSquares[i].addEventListener("mouseover", function() {
        gridSquares[i].style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        })
    }
})

grid();
