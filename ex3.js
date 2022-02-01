function removeTheSanta() {
    this.style.opacity = "0";
}
var santa = document.getElementsByClassName("btn")
for (let i = 0; i < santa.length; i++) {
    santa[i].addEventListener("click", removeTheSanta)
}