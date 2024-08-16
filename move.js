const body = document.querySelector("body");

//event listener for keydown event
body.addEventListener("keydown", (e) => {
    e.preventDefault();
    if (e.key === "ArrowUp") {
        console.log("up");
    } else if (e.key === "ArrowDown") {
        console.log("down");
    } else if (e.key === "ArrowLeft") {
        console.log("left");
    } else if (e.key === "ArrowRight") {
        console.log("right");
    }
});

