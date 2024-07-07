const container = document.getElementById("container");
const sizeBtn = document.getElementById("size");
let gridLength = 16;

sizeBtn.addEventListener("click", function() {
    gridLength = prompt("Enter grid length (1 : 100)");

    if(gridLength < 1 || gridLength > 100 || isNaN(gridLength)){
        alert("Please enter a valid number")
    }
    else{
        makeGrid();
    }
});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function makeGrid(){
    container.innerHTML = '';

    numberOfSquares = gridLength ** 2;

    for(let i = 0; i < numberOfSquares; i++){
        let square = document.createElement("div");
        square.style.width = `${720/(gridLength)}px`
        square.className = "square";
        container.appendChild(square);
    
        square.addEventListener("mouseenter", function (){
            square.style.backgroundColor = getRandomColor();
        });
    }
}

makeGrid();
