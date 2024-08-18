const body = document.querySelector("body");
const svg = document.querySelector("svg");
//event listener for keydown event
body.addEventListener("keydown", (e) => {
    //console.log("pressed");
    //get id of space robot is currently in
    //console.log(svg.parentElement); 
    let startPositionId = svg.parentElement.id; //works!!!!
    console.log(startPositionId); //works!!!
});

