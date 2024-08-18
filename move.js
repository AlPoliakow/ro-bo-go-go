const body = document.querySelector("body");
const svg = document.querySelector("svg");

//event listener for keydown event
body.addEventListener("keydown", (e) => {
    //console.log("pressed");
e.preventDefault();



function moveLeft() {
    function showPosition() {
        //get id of space robot is currently in
        const startPositionId = svg.parentElement.id; //works!!!!
        console.log(startPositionId); //works!!!
    }
    showPosition();
    console.log("left");
    svg.parentElement.id = 12;
    console.log(svg.parentElement.id); //registered as 12 but does not change the location of the robot image
    //rotate the robot to the left
    svg.style.transform = "rotate(90deg)"; 
    //make the robot disappear
    svg.parentElement.innerHTML = ""; //works
    // make the robot re-appear in the square to the left
}

function moveRight() {

    console.log("right");
}
function moveDown() {

    console.log("down");
}
function moveUp() {


    console.log("up");
}
switch (e.key) {
    case "ArrowLeft":
        moveLeft();
        break;
    case "ArrowUp":
        moveUp();
        break;
    case "ArrowRight":
        moveRight();
        break;
    case "ArrowDown":
        moveDown();
        break;
}
});
