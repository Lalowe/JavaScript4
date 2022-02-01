var player1 = prompt("Tel us your name, player1?");
var player2 = prompt("Tel us your name, player2?");
var number1 = "";
var number2 = "";

document.getElementById("player1").innerHTML = player1;
document.getElementById("player2").innerHTML = player2;

function randomNumber1() {
    var number1 = Math.floor(Math.random() * 6 + 1);
    document.getElementById("result1").innerHTML = number1;
}

function randomNumber2() {
    var number2 = Math.floor(Math.random() * 6 + 1);
    document.getElementById("result2").innerHTML = number2;
}

document.getElementById("button1").addEventListener("click", randomNumber1);
document.getElementById("button2").addEventListener("click", randomNumber2);