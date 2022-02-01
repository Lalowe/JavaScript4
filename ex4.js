var color1 = "";
var color2 = "";
var color3 = "";
var bg = document.getElementById("body");


function randomColor() {
    var rgb = [];
    for (let i = 0; i < 3; i++) {
        color = Math.floor(Math.random() * 256);
        rgb.push(color);
    }
    bg.style.background = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;

}


document.getElementById("btn").addEventListener("click", randomColor);