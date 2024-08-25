const gameBoard = document.querySelector("#gameboard");
const controls = document.querySelector("#controls");
const gridBot = document.createElementNS("http://www.w3.org/2000/svg", `svg`);
const robotInfo = getComputedStyle(gridBot);
//console.log(robotInfo);
//const robotTransform = robotInfo[314]; // 254 for rotate but still doesn't work
//console.log(robotTransform); // =transform ????
const robotTransform = robotInfo.getPropertyValue("transform");


for (let i = 1; i < 26; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridItem.classList.add("space");
    gridItem.textContent = i;
    gameBoard.appendChild(gridItem);




    //square 13 appendChild image
    if (i == 13) {
        gridItem.innerHTML = "";

        const iconPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');

        gridBot.setAttribute('fill', 'black'); //colours it in
        gridBot.setAttribute('viewBox', '0 0 640 512'); //from svg link
        gridBot.setAttribute('stroke', 'black'); // color

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

const rotateLeft = document.createElement("button");
rotateLeft.innerText = "Rotate left";
controls.appendChild(rotateLeft);

rotateLeft.addEventListener("click", function (e) {
    e.preventDefault();
    gridBot.setAttribute("transform", `rotate(90)`);
    console.log(gridBot);
    console.log(robotInfo.getPropertyValue("transform")); // matrix(0, 1, -1, 0, 0, 0)
})

const rotateRight = document.createElement("button");
rotateRight.innerText = "Rotate right";
controls.appendChild(rotateRight);

rotateRight.addEventListener("click", function (e) {
    e.preventDefault();
    gridBot.setAttribute("transform", `rotate(-90)`);
    console.log(gridBot);
    console.log(robotInfo.getPropertyValue("transform")); //matrix(0, -1, 1, 0, 0, 0)
})

const rotateUp = document.createElement("button");
rotateUp.innerText = "Rotate up";
controls.appendChild(rotateUp);

rotateUp.addEventListener("click", function (e) {
    e.preventDefault();
    gridBot.setAttribute("transform", `rotate(180)`);
    console.log(gridBot);
    console.log(robotInfo.getPropertyValue("transform"));// matrix(-1, 0, 0, -1, 0, 0)
})

const rotateDown = document.createElement("button");
rotateDown.innerText = "Rotate down";
controls.appendChild(rotateDown);

rotateDown.addEventListener("click", function (e) {
    e.preventDefault();
    gridBot.setAttribute("transform", `rotate(0)`);
    console.log(gridBot["transform"]);
    console.log(robotInfo.getPropertyValue("transform")); //matrix(1, 0, 0, 1, 0, 0)
})

const advance = document.createElement("button");

advance.innerText = "Advance";
controls.appendChild(advance);

advance.addEventListener("click", function (e) {
    e.preventDefault();
    //console.log("clicked");
    switch(robotInfo.getPropertyValue("transform")) { 
        case "matrix(1, 0, 0, 1, 0, 0)":
            console.log("Rotation 0");
            break;
        case "matrix(0, 1, -1, 0, 0, 0)":
            console.log("Rotation 90");
            break;
        case "matrix(0, -1, 1, 0, 0, 0)":
            console.log("Rotation -90");
            break;
        case "matrix(-1, 0, 0, -1, 0, 0)":
            console.log("Rotation 180");
            break;
    }
})