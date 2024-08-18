const body = document.querySelector("body");
const svg = document.querySelector("svg");

const divs = document.querySelectorAll(".space");
//get id of space robot is currently in
const startPositionId = svg.parentElement.id; //works!!!!

//event listener for keydown event
body.addEventListener("keydown", (e) => {
    //console.log("pressed");
    e.preventDefault();

    function moveLeft() {
        function showPosition() {


            console.log(startPositionId); //works!!!
        }
        showPosition();
        console.log("left");
        console.log(svg.parentElement.id); //issue with the second time around

        //rotate
        svg.style.transform = "rotate(90deg)"; //works
        console.log("rotated");
        //delay

        //make the robot disappear
        //svg.parentElement.innerHTML = ""; //works
        // make the robot re-appear in the square to the left
        //forEach loop to select the div by id
        divs.forEach((div) => {
            //make the robot disappear
            //div.innerHTML = "";
            //make the robot reappear in the next square 
            if (div.id == svg.parentElement.id) {
                console.log("potatoes"); //works
                 
            }
            let a = parseInt(svg.parentElement.id);
                console.log(a);
            if (div.id == (a -= 1)) {
                console.log("div-id working");
                div.innerHTML = robot;
                svg.parentElement.innerHTML="";
            }
            //(div.id == 12) { //(parseInt(svg.parentElement.id) -=1))
            //div.innerHTML = svg; //shoes words
            //div.innerHTML = robot;
        });
    }

    function moveRight() {
        function showPosition() {


            console.log(startPositionId); //works!!!
        }
        showPosition();
        console.log("left");
        console.log(svg.parentElement.id); //issue with the second time around

        //rotate
        svg.style.transform = "rotate(90deg)"; //works
        console.log("rotated");
        //delay

        //make the robot disappear
        //svg.parentElement.innerHTML = ""; //works
        // make the robot re-appear in the square to the left
        //forEach loop to select the div by id
        divs.forEach((div) => {
            
            let a = parseInt(svg.parentElement.id);
                console.log(a);
            if (div.id == (a += 1)) {
                console.log("div-id working");
                div.innerHTML = robot;
                svg.parentElement.innerHTML="";
            }
            if (div.id == svg.parentElement.id) {
                console.log("potatoes-right"); //works
                div.innerHTML= "";
            }
        });
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
