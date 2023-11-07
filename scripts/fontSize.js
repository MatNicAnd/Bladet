const increaseFontSizeButton = document.getElementById("fontStørre");
const downsizeFontSizeButton = document.getElementById("fontMindre");
const textElement = document.querySelector(".tekst");

// Retrieve the font size from local storage, or use a default value
let currentFontSize = localStorage.getItem("fontSize") || "16px";
textElement.style.fontSize = currentFontSize;

increaseFontSizeButton.addEventListener("click", function() {
    currentFontSize = parseFloat(getComputedStyle(textElement).fontSize);
    if (currentFontSize <= 30) {
        currentFontSize += 2;
        textElement.style.fontSize = currentFontSize + "px";
        localStorage.setItem("fontSize", currentFontSize + "px");
    }
});

downsizeFontSizeButton.addEventListener("click", function() {
    currentFontSize = parseFloat(getComputedStyle(textElement).fontSize);
    if (currentFontSize >= 16) {
        currentFontSize -= 2;
        textElement.style.fontSize = currentFontSize + "px";
        localStorage.setItem("fontSize", currentFontSize + "px");
    }
});

