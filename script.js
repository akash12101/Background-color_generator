const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const generateBtn = document.getElementById("generateBtn");
const body = document.querySelector("body");

function setGradient() {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
}

function generateBackground() {
    setGradient();
}

generateBtn.addEventListener("click", generateBackground);