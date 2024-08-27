const gameBoard = document.querySelector("#gameboard");
const controls = document.querySelector("#controls");
const gridBot = document.createElementNS("http://www.w3.org/2000/svg", `svg`);
const robotInfo = getComputedStyle(gridBot);
const instructions = document.querySelector(".instructions");
//console.log(robotInfo);
//const robotTransform = robotInfo[314]; // 254 for rotate but still doesn't work
//console.log(robotTransform); // =transform ????
const robotTransform = robotInfo.getPropertyValue("transform");



for (let i = 1; i < 26; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    //add the class "space" for styling
    gridItem.classList.add("space");
    // add index attribute 
    gridItem.setAttribute("index", i);
    // add each space to the board
    gameBoard.appendChild(gridItem);

    //square 13 appendChild image
    if (i == 13) {
        const iconPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');

        gridBot.setAttribute('fill', 'black'); //colours it in
        gridBot.setAttribute('viewBox', '0 0 640 512'); //from svg link
        gridBot.setAttribute('stroke', 'black'); // color
        gridBot.setAttribute("transform", `rotate(0)`); // to make advancing work before button pressing

        iconPath.setAttribute("d", "M320 0c17.7 0 32 14.3 32 32l0 64 120 0c39.8 0 72 32.2 72 72l0 272c0 39.8-32.2 72-72 72l-304 0c-39.8 0-72-32.2-72-72l0-272c0-39.8 32.2-72 72-72l120 0 0-64c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224l16 0 0 192-16 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-16 0 0-192 16 0z");
        //iconPath.setAttribute('stroke-linecap', 'round');
        //iconPath.setAttribute('stroke-linejoin', 'round');
        iconPath.setAttribute('stroke-width', '6'); //thickness of lines
        gridBot.appendChild(iconPath);
        gridBot.classList.add("robot");


        gridItem.appendChild(gridBot);
        console.log(gridItem);
    }
}

// get all divs
const divs = document.querySelectorAll(".space");

// create a button to rotate the robot left
const rotateLeft = document.createElement("button");
rotateLeft.innerText = "Turn left";
controls.appendChild(rotateLeft);

// make the button functional
rotateLeft.addEventListener("click", function (e) {
    e.preventDefault();
    gridBot.setAttribute("transform", `rotate(90)`);
    // console.log(robotInfo.getPropertyValue("transform")); // matrix(0, 1, -1, 0, 0, 0)
})

// create a button to rotate the robot right
const rotateRight = document.createElement("button");
rotateRight.innerText = "Rotate right";
controls.appendChild(rotateRight);

rotateRight.addEventListener("click", function (e) {
    e.preventDefault();
    gridBot.setAttribute("transform", `rotate(-90)`);
    // console.log(robotInfo.getPropertyValue("transform")); //matrix(0, -1, 1, 0, 0, 0)
})

// create a button to rotate the robot upwards
const rotateUp = document.createElement("button");
rotateUp.innerText = "Turn up";
controls.appendChild(rotateUp);

//make the button functional
rotateUp.addEventListener("click", function (e) {
    e.preventDefault();
    gridBot.setAttribute("transform", `rotate(180)`);
    //console.log(robotInfo.getPropertyValue("transform"));// matrix(-1, 0, 0, -1, 0, 0)
})

// create a button to rotate the robot downwards
const rotateDown = document.createElement("button");
rotateDown.innerText = "Turn down";
controls.appendChild(rotateDown);

// make the button functional
rotateDown.addEventListener("click", function (e) {
    e.preventDefault();
    gridBot.setAttribute("transform", `rotate(0)`);
    //console.log(robotInfo.getPropertyValue("transform")); //matrix(1, 0, 0, 1, 0, 0)
})

const advance = document.createElement("button");

advance.innerText = "Advance";
controls.appendChild(advance);

advance.addEventListener("click", function (e) {
    e.preventDefault();
    //console.log("clicked");
    let parent = gridBot.parentElement.getAttribute("index");
    console.log(parent); // 13
    let parentNumber = parseInt(parent);
    console.log(parentNumber);
    let parentLefty = parentNumber -= 1;
    console.log(parentLefty);
    let parentRighty = parentNumber += 2; // "+= 1" returned 13 (?)
    console.log(parentRighty);
    let parentUppy = parentNumber -=6;
    console.log(parentUppy);
    let parentUndery = parentNumber +=10;
    console.log(parentUndery);

    switch (robotInfo.getPropertyValue("transform")) {
        case "matrix(1, 0, 0, 1, 0, 0)":
            console.log("Rotation 0");
            divs.forEach((div) => {
                // isolate div index
                const divIndex = div.getAttribute("index");
                //console.log(divIndex);
                const divIndexNumber = parseInt(divIndex);
                //console.log(divIndexNumber);

                if (divIndexNumber == parentUndery) {
                    div.appendChild(gridBot);
                    console.log("attempted to shift down");
                }
            })
            break; //does not wor prior to robot turning!!!
        case "matrix(0, 1, -1, 0, 0, 0)":
            console.log("Rotation 90");

            divs.forEach((div) => {
                // isolate div index
                const divIndex = div.getAttribute("index");
                //console.log(divIndex);
                const divIndexNumber = parseInt(divIndex);
                //console.log(divIndexNumber);

                if (divIndexNumber == parentLefty) {
                    div.appendChild(gridBot);
                    console.log("attempted to shift left");
                }
                //switch (parentNumber) {  // processing the parent divs index
                    //case "13":
                        //instructions.innerText = "There's nowhere *left* to go";
                       // console.log("don't shift");
                       // break;
                    //case 2 | "3" | "4" | "5" | "7" | "8" | "9" | "10" | 12 | 13 | "14" | "15" | "17" | "18" | "19" | "20" | "22" | "23" | "24" | "25":
                    //console.log("Something registered");
                    // if (divIndexNumber == parentMaths) {
                    //  div.appendChild(gridBot);
                    // console.log("attempted to shift left");
                    //}
                    // break;
                //}
                // don't shift left if on left border
                //if (divIndex == 1 | divIndex == 6 | divIndex == 11 | divIndex == 16 | divIndex == 21) {
                //instructions.innerText = "There's nowhere *left* to go";
                //} else if (divIndex == 2 | divIndex == 3 | divIndex == 4| divIndex == 5| divIndex == 7 | divIndex == 8 | divIndex == 9 | divIndex == 10 | divIndex == 12 | divIndex == 13 |divIndex == 14 | divIndex == 15 | divIndex == 17 | divIndex == 18 |divIndex == 19 |divIndex == 20 | divIndex == 22 | divIndex == 23| divIndex == 24 | divIndex == 25){                    //make the robot reappear in the next square 
                // if (divIndexNumber == parentMaths) {
                // div.appendChild(gridBot);
                // console.log("attempted to shift left");
                //  }
                // }
            })
            break;
        case "matrix(0, -1, 1, 0, 0, 0)":
            console.log("Rotation -90");
            divs.forEach((div) => {
                // isolate div index
                const divIndex = div.getAttribute("index");
                //console.log(divIndex);
                const divIndexNumber = parseInt(divIndex);
                //console.log(divIndexNumber);

                if (divIndexNumber == parentRighty) {
                    div.appendChild(gridBot);
                    console.log("attempted to shift right");
                }
            })
            break;
        case "matrix(-1, 0, 0, -1, 0, 0)":
            console.log("Rotation 180");
            divs.forEach((div) => {
                // isolate div index
                const divIndex = div.getAttribute("index");
                //console.log(divIndex);
                const divIndexNumber = parseInt(divIndex);
                //console.log(divIndexNumber);

                if (divIndexNumber == parentUppy) {
                    div.appendChild(gridBot);
                    console.log("attempted to shift up");
                }
            })
            break;
    }
})