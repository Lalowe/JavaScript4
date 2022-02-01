var circle = document.getElementById("cir")




function inside() {
    document.getElementById("IT").innerHTML = "You are in the circle"

}

function outside() {
    document.getElementById("IT").innerHTML = "You are outside of the circle"

}

function click() {
    circle.style.background = "yellow"
}

function doubleClick() {
    circle.style.background = "blue"
}
document.getElementById("cir").addEventListener("mouseover", inside);
document.getElementById("cir").addEventListener("mouseout", outside);
document.getElementById("cir").addEventListener("click", click);
document.getElementById("cir").addEventListener("dblclick", doubleClick);


// if (inside === true) {
//     document.getElementById.innerHTML = "You are in the circle"
// } else {
//     document.getElementById.innerHTML = "You are outside of the circle"
//     inside = false;
// }
// }