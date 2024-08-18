const body = document.querySelector("body");
const robotStyles = document.querySelector("#robot");
const svg = document.querySelector("svg");

//event listener for keydown event
body.addEventListener("keydown", (e) => {
    e.preventDefault();
  
    function moveLeft() {
        function showPosition() {
            // Get the current left position
            let locationLeft = getComputedStyle(svg).left;
            console.log(locationLeft); // Output: "100px" (or whatever the current value is)
    
            
           if (location.left = "200px") {
                svg.classList.add("left100");
            } else if (locationLeft.left = "100px") {
                svg.classList.add("left0");
            }

            console.log(locationLeft); // returning same value???

            // Parse the current left position 
            //let curLeft = parseInt(location, 10); // Convert "100px" to 100

            // Set the new left position
            //robotStyles.style.left = `(curLeft + 100) + "px"`;
            //console.log(locationLeft + "or nah?");
            //box.height(curHeight + 55);
            //let locationTop = parseInt(location.top, 10); //changes px to a number for equation purposes
            //let locationLeft = location.left; // changes px to a number for equation purposes

            //console.log(locationTop, locationLeft);
            //locationLeft = "(${location.left} -= 100)px"; // !!!!!!!!! DOES NOT RE-ASSIGN left value!!!! !!!!!!!
            //console.log(locationLeft);
        }
        showPosition();

        console.log("left");
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


//console.log('pressed');
// if (e.key == "ArrowUp") {
// if (document.getElementById("robot").style.top == "200px") {
// document.getElementById("robot").style.top += "100px";
// console.log("start-200");
//  } else if (document.getElementById("robot").style.top == "100px") {
// document.getElementById("robot").style.top += "100px";
// } else if (document.getElementById("robot").style.top == "300px") {
// document.getElementById("robot").style.top += "100px";
// } else if (document.getElementById("robot").style.top == "400px") {
// document.getElementById("robot").style.top += "100px";
// } else if (document.getElementById("robot").style.top == "500px") {
// document.getElementById("robot").style.top += "100px";
//  } else if (document.getElementById("robot").style.top == "0px") {
//document.getElementById("robot").style.top += "100px";
//  }
// console.log("up");
//} else if (e.key == "ArrowDown") {
//document.getElementById("robot").style.transform = "rotate(180deg)";
// document.getElementById("robot").style.bottom += "100px";
//  document.getElementById("robot").Math.abs(100);
//document.getElementById("robot").style.transform = "rotate(180deg)";
//console.log("down");
// } else if (e.key == "ArrowLeft") {
// document.getElementById("robot").style.transform = "rotate(90deg)";
// document.getElementById("robot").style.left += "100px";
//document.getElementById("robot").style.transform = "rotate(90deg)";
//const rotateLeft = function () {
// robot.style.transform = "rotate(90deg)";
//setTimeout(rotateLeft, 2000);
//};
// rotateLeft();
// console.log("left");
// } else if (e.key == "ArrowRight") {
//document.getElementById("robot").style.transform = "rotate(90deg)";
//document.getElementById("robot").style.right += "100px";
//document.getElementById("robot").style.transform = "rotate(90deg)";
//const rotateRight = function () {
//robot.style.transform = "rotate(270deg)";
// setTimeout(rotateRight, 2000);
// };
//rotateRight();
//robot.style.transform = "rotate(90deg)"; // reset
//console.log("right");
// }
// });

