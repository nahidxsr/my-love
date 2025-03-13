const texts = [
    "Hard Feelings...",
    "Love is a glitch...",
    "No signal in my heart...",
    "Lost but never found...",
    "404: Love Not Found...",
    "Heart.exe stopped working...",
    "Undefined emotions...",
    "Connection lost..."
];

let index = 0;
let charIndex = 0;
const speed = 100;
const textElement = document.getElementById("text");

function typeText() {
    if (charIndex < texts[index].length) {
        textElement.innerHTML += texts[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, speed);
    } else {
        setTimeout(eraseText, 1500);
    }
}

function eraseText() {
    if (charIndex > 0) {
        textElement.innerHTML = texts[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, 50);
    } else {
        index = (index + 1) % texts.length;
        setTimeout(typeText, 500);
    }
}

typeText();

/* ম্যাট্রিক্স কোড */
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const fontSize = 12;
const columns = canvas.width / fontSize;
const drops = [];

for (let x = 0; x < columns; x++) {
    drops[x] = Math.floor(Math.random() * canvas.height);
}

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#0F0";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

setInterval(drawMatrix, 50);
