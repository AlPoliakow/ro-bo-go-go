const body = document.querySelector("body");

//event listener for keydown event
body.addEventListener("keydown", (e) => {
    console.log("pressed");
    //get id of space robot is currently in
    console.log(robot.parentElement); // UNDEFINED - ERROR!!!
    //let startPositionId = robot.parentElement.getAttribute("id");
    //console.log(startPositionId);
});

