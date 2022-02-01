let input1 = document.getElementById("first")
let input2 = document.getElementById("last")
let input3 = document.getElementById("ages")
let input4 = document.getElementById("profession")

let element1 = document.getElementById("firstname")
let element2 = document.getElementById("lastname")
let element3 = document.getElementById("age")
let element4 = document.getElementById("output");

document.getElementById('btn').addEventListener("click", extractValue)

function extractValue() {
    element1.innerHTML = input1.value
    element2.innerHTML = input2.value
    element3.innerHTML = input3.value
    if (input1.value.length > 5) { // .value have to be there ,always ask when ,where
        element1.style.color = "red";

    } else {
        element1.style.color = "green";
    }
    changeBackground();
}

function changeBackground() {
    if (input4.value == "IT") {
        element4.style.background = "purple";
    } else {
        element4.style.background = "yellow";
    }
}