var color1 = "";
var color2 = "";
var color3 = "";
var bg = document.getElementById("body");


function randomColor() {
    color1 = Math.floor(Math.random() * 256);
    color2 = Math.floor(Math.random() * 256);
    color3 = Math.floor(Math.random() * 256);
    bg.style.background = `rgb(${color1}, ${color2}, ${color3})`;

}


document.getElementById("btn").addEventListener("click", randomColor);