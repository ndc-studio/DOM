const important = document.querySelectorAll('.important');

for (const element of important) {
    element.setAttribute("title", "This is an important item");
}

const img = document.querySelectorAll('img');

for (const element of img) {
    if (!element.classList.contains("important")) {
        element.style.display = "none";
    }
}

const parag = document.querySelectorAll('p');

for (const element of parag) {
    console.log(element.innerText + "\n");
    if (element.className) {
        console.log("Ce paragraphe contient la classe : " + element.className + "\n");
    } else {
        element.style.color = randomColor()
    }
}

function randomColor() {
    const r = (Math.floor(Math.random() * 256));
    const g = (Math.floor(Math.random() * 256));
    const b = (Math.floor(Math.random() * 256));
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

