const gameBoard = document.querySelector("#gameboard");
const width = 5;
const robot = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="robot"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M320 0c17.7 0 32 14.3 32 32l0 64 120 0c39.8 0 72 32.2 72 72l0 272c0 39.8-32.2 72-72 72l-304 0c-39.8 0-72-32.2-72-72l0-272c0-39.8 32.2-72 72-72l120 0 0-64c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224l16 0 0 192-16 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-16 0 0-192 16 0z"/></svg>`;


//define state
const startPositions = ["","","","","","","","","","","","","","","","","","","","","","","","",""];

function createBoard() {
    startPositions.forEach((startPosition, i) => {
        //create a 5x5 grid
        const space = document.createElement("div");
        space.classList.add("space");
        gameBoard.append(space);
        //console.log(i);
        space.innerHTML=startPosition;
        // make the board checkered
        const row = Math.floor(((25-i)/5)+1);
        if (row % 2 ===0){
            space.classList.add(i % 2=== 0 ? "white" : "orange");
        } else {
           space.classList.add(i % 2=== 0 ? "white" : "orange");
        }
    })
};

createBoard();

//add the robot
function robotAppear() {
    gameBoard.innerHTML += robot; 
}

robotAppear();
