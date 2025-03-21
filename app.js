let ifOn = false;
let colorBlack = false;

let container = document.createElement("div");
container.setAttribute("style", "height: fit-content; width: fit-content; border: 1px solid black;");
container.addEventListener("click", ()=>{
    ifOn = !ifOn;
})
document.body.appendChild(container);

let pixels = 20;
let boxSize = 400 / pixels;

function randomColor() {
    if(ifOn == true) {
        let colors = [0, 0, 0];

        if (colorBlack == false) {
            for (let color = 0; color < 3; color += 1) {
                let randomInt = Math.floor(Math.random() * 255);
                colors[color] = randomInt;
            }
        }
        this.style.backgroundColor = `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`;
    }
}

function makeGrid() {
    container.innerHTML = "";

    for (let rows = 0; rows < pixels; rows += 1) {
        let row = document.createElement("div");
        row.setAttribute("style", "display: flex; width: fit-content");

        for (let columns = 0; columns < pixels; columns += 1) {
            let box = document.createElement("div");
            box.setAttribute("style", `width: ${boxSize}px; height: ${boxSize}px; flex-shrink: 0`);
            box.addEventListener("mouseover", randomColor);
            row.appendChild(box);
        }
        container.appendChild(row);
    }
}

makeGrid();

let button = document.createElement("button");
button.setAttribute("style", "border: 3px solid rgb(75, 75, 255); background-color: rgb(42, 198, 222); font-size: 25px; border-radius: 7px; margin-top: 15px");
button.textContent= "Set amount of pixels";
button.addEventListener("click", getboxSize);
document.body.appendChild(button);

function getboxSize() {
    pixelString = prompt("Enter amount of pixels");
    pixels = Number(pixelString);

    while (pixelString > 185 || isNaN(pixelString)) {
        pixelString = prompt("Enter a number for the amount of pixels. (Or click \"cancel\")");
    }
    if (pixelString != null && pixelString != "") {
        pixels = Number(pixelString);
        boxSize = 400 / pixels
        makeGrid();
    }
    
}

button = document.createElement("button");
button.setAttribute("style", "border: 3px solid rgb(75, 75, 255); background-color: rgb(42, 198, 222); font-size: 25px; border-radius: 7px; margin-top: 15px; margin-left: 15px;");
button.textContent= "Clear";
button.addEventListener("click", makeGrid);
document.body.appendChild(button);

button = document.createElement("button");
button.setAttribute("style", "border: 3px solid rgb(75, 75, 255); background-color: rgb(42, 198, 222); font-size: 25px; border-radius: 7px; margin-top: 15px; margin-left: 15px;");
button.textContent= "Black";
button.addEventListener("click", ()=>{
    if (colorBlack == false) {
        colorBlack = true;
        button.innerHTML = "Random";
    } else {
        colorBlack = false;
        button.innerHTML = "Black";
    }
});
document.body.appendChild(button);
