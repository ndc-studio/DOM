// afficher le contenu de la balise <title>
console.log(document.title)

// Modifie la balise <title>
document.title = "Modifying the DOM";

//Premier essai pour changer la couleur de fond
// document.body.style.backgroundColor = "#FF69B4";

// Crée une fonction pour générer des couleurs random (pour chaque couleur entre 0 et 255)
function randomColor() {
    const r = (Math.floor(Math.random() * 256));
    const g = (Math.floor(Math.random() * 256));
    const b = (Math.floor(Math.random() * 256));
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

// Permet de modifier la couleur de fond de l'element <body> du index.html
document.body.style.backgroundColor = randomColor();

// crée un variable pour contenir tout les childs de <body>
const child_body = document.body.children;

// Crée la boucle for pour afficher 
for (const element of child_body) {
    console.log(element);
}