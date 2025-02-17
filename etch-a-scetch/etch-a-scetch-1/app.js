let pixles = prompt("Enter the amount of pixles");
pixles = Number(pixles);
let pix = "20px";

function randomColor() {
    let colors = [0, 0, 0];

    for (let color = 0; color < 3; color += 1) {
        let randomInt = Math.floor(Math.random() * 255);
        colors[color] = randomInt;
    }
    let colorString = `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`;
    event.target.style.backgroundColor = colorString;
}

document.body.style.border = "1px solid red";

for (let rows = 0; rows < pixles; rows += 1) {
    let row = document.createElement("div");
    Object.assign(row.style, { display: "flex"});
    document.body.appendChild(row);

    for (let columns = 0; columns < pixles; columns += 1) {
        let box = document.createElement("div");
        Object.assign(box.style, { height: pix, width: pix, border: "1px solid black", flexShrink: 0});
        box.addEventListener("mouseover", randomColor);
        row.appendChild(box);
    }
}