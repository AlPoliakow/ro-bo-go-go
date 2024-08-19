const gameBoard = document.querySelector("#gameboard");
const width = 5;


const container = document.querySelector(".grid");
const gridNodes = document.querySelectorAll(".grid-item");
const gridArray = Array.from(gridNodes);
let circle = document.createElement("div");
let position = {x: 0, y: 0};


function makeGrid(rows, cols) {
  let x = 0;
  let y = 0;
  for (let c = 0; c < rows; c++) {
    for (let d = 1; d <= cols; d++) {
    let cell = document.createElement("div");
    
    y = c%cols;
    
    if (y === (rows - 1)) {
    	x++;
    }    

   // let position = { x: 0, y: 1 }; for (let c = 0; c < rows; c++) { for (let d = 1; d <= cols; d++) {
        //let cell = document.createElement("div"); 
        container.appendChild(cell).className = "grid-item grid-item-" + c + "" + d;
   };
        
    //container.appendChild(cell).className = "grid-item grid-item-" + x + '' + y;
    //container.appendChild(cell).className = `"grid-item ("grid-item-" + x) + (".grid-item-" + y)` ;
   // container.appendChild(cell).className = "grid-item grid-item-" + x + '' + y + c;
  //}

  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
}
}
const keys = {
  left: 37,
  up: 38,
  right: 39,
  down: 40
};

makeGrid(5, 5); // 5x5 grid
circle.style.width = "80px";
circle.style.height = "80px";
circle.style.margin = "10px"; // center the div
circle.style.background = "#FFFFFF";
circle.innerHTML = `<i class="fa-solid fa-robot robot"></i>`;
let firstGridItem = document.querySelector(".grid-item");
firstGridItem.appendChild(circle);

let squares = document.querySelectorAll(".grid-item");
console.log(squares);


let startSquare = document.querySelector(".grid-item-23");
console.log(startSquare);

//startSquare.append(circle);

function handleKey(e) {
  switch (e.keyCode) {
    case keys.left:
      position.y--;
      break;
    case keys.up:
      position.x--;
      break;

    case keys.right:
      position.y++;
      break;

    case keys.down:
      position.x++;
      break;
  }
  
  let gridItem = document.querySelector(".grid-item-" + position.x + '' + position.y);
  gridItem.appendChild(circle);
}
window.addEventListener("keydown", handleKey);

