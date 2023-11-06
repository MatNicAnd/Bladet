const body = document.body;
const article = document.getElementById("artikel");
const modeButton = document.getElementById("mode");
let mode = localStorage.getItem("mode") || "light";

function setDarkMode() {
    body.style.backgroundColor = "#303030";
    article.style.color = "white";
    localStorage.setItem("mode", "dark");
}

function setLightMode() {
    body.style.backgroundColor = "white";
    article.style.color = "#303030";
    localStorage.setItem("mode", "light");
}

function modeSetter() {
    console.log(mode);
    if (mode === "light") {
        setLightMode();
    } else {
        mode = "dark";
        setDarkMode();
    }
}

function modeChanger() {
    console.log(mode);
    if (mode === "light") {
        mode = "dark";
        setDarkMode();
    } else {
        mode = "light";
        setLightMode();
    }
}

modeButton.addEventListener("click", modeChanger);
document.addEventListener("DOMContentLoaded", modeSetter);
