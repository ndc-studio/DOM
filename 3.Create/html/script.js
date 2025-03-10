
const students = ["Antoine", "Arsenia", "Hugo", "Kamal", "Jordan", "Manu", "Stephan", "Martin", "Valentin", "Inna", "Liana"];;

let r = 0;
let g = 0;
let b = 0;
function randomColor() {
    r = (Math.floor(Math.random() * 256));
    g = (Math.floor(Math.random() * 256));
    b = (Math.floor(Math.random() * 256));
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function isLightColor(color) {
    const rgb = color.match(/\d+/g).map(Number);
    const brightness = 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
    if (brightness > 128) {
        return true;
    } else {
        return false;
    }
}

const article = document.querySelector('article');

students.forEach(learner => {
    const section = document.createElement("section");
    section.style.backgroundColor = randomColor();
    
    const backgroundColor = section.style.backgroundColor;
    if (isLightColor(backgroundColor)) {
        section.style.color = 'black';
    } else {
        section.style.color = 'white';
    }

    const paragraph = document.createElement("p");
    paragraph.textContent = learner;
    
    section.appendChild(paragraph);
    
    article.appendChild(section);
});

const sections = Array.from(article.querySelectorAll("section"));
sections.sort(() => Math.random() - 0.5);
sections.forEach(section => article.appendChild(section));
