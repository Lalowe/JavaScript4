function removeTheSanta() {

    if (this.style.opacity == 0) {
        this.style.opacity = "1";
    } else {
        this.style.opacity = "0"
    }
}
var santa = document.getElementsByClassName("btn")
for (let i = 0; i < santa.length; i++) {
    santa[i].addEventListener("click", removeTheSanta)
}