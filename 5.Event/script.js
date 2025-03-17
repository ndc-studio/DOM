const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {
  console.log(e.target.classList[1])
  console.log(getElapsedTime())
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}


/* ------------------------------------------------------------ */

/** @description - Crée un couleur aléatoire */
function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`
}

/** @description - Cibler la liste <ul> */
const ul = document.querySelector("ul");

/** @description - Cible la section de `class="displayedsquare-wrapper"` */
const displayWrapper = document.querySelector('.displayedsquare-wrapper');

/** @description - Cible le body */
const body = document.querySelector("body");

/** @description - Crée une boucle pour itérer sur chaque carré */
for (let element of actionSquares) {

  /** @description - Ajoute un Event à chaque carré */
  element.addEventListener('click', function(e) {

    /**
     * @type {HTMLElement}
     * @description - Crée une nouvelle balise <div>
     */
    const newDiv = document.createElement("div");

    /** @descriton - Ajoute une classe displayedsquare */
    newDiv.className = "displayedsquare";

    /** @description - Récupère la couleur du carré par le biais du fichier style.css */
    const color = window.getComputedStyle(e.target).backgroundColor;

    /** @description - Récupérer le nom de la couleur cliquée (ici j'ai récupéré la class[1] du carré cliqué) */
    const colorName = e.target.classList[1];

    /** @description - Applique la couleur de fond du carré cliqué dans le nouveau carré */
    newDiv.style.backgroundColor = color;

    /** @description - Ajoute un Event au click pour le newDiv */
    newDiv.addEventListener("click", function() {
      alert(`The color is ${colorName}`)
    })

    /** @description - Crée l'element dans la <section> */
    displayWrapper.appendChild(newDiv);

    /** @description - Créer une nouvelle <li> */
    const li = document.createElement("li");

    /** @description - Ajout du text contenu dans le <li> */
    li.textContent = `[${getElapsedTime()}] Created a new ${colorName} square`;

    /** @description - Ajout du <li> dans le <ul> */
    ul.appendChild(li);
  })
}

/** @description - Ajoute un evenement keypress a <body> */
body.addEventListener("keypress", function(event) {
  /** @description - Si la touche SPACE (32) est pressée */
  if (event.keyCode === 32) {
    /** @description cheange le bg par un ecouleur aléatoire */
    document.body.style.backgroundColor = randomColor();
    /** @description - Crée une nouvelle <li> */
    const li = document.createElement("li");
    /** @description - Ajout du texte contenu dans <li>*/
    li.textContent = `[${getElapsedTime()}] Pressed 'SPACE'`
    /** @description - Ajotue la nouvelle <li> dans <ul> */
    ul.appendChild(li);
  }

  /** @description - Si la touche l ou L est pressée */
  if (event.key === "l" || event.key === "L") {
    /** @description - Cible toutes les <li> dans le html */
    const allLi = document.querySelectorAll("li");
    /** @description - Initialise l'index i pour la boucle while */
    let i = 0;
    /** @description itère le tableau des <li> ciblés */
    while (i < allLi.length) {
      /** @description - Suppprime un le <li> selectionné pendant l'itération */
      allLi[i].remove();
      /** @description - Incrémente de 1 à chaque boucle */
      i++;
    }
  }

  /** @description - Si la touche s ou S est pressée */
  if (event.key === "s" || event.key === "S") {
    /** @description - Cible toutes les <div class="displayedsquare"> dans le html */
    const allSquares = document.querySelectorAll(".displayedsquare");
    /** @description - Initialise l'index i pour la boucle while */
    let i = 0;
    /** @description itère le tableau des <div class="displayedsquare"> ciblés */
    while (i < allSquares.length) {
      /** @description - Suppprime un le <div> selectionné pendant l'itération */
      allSquares[i].remove();
      /** @description - Incrémente de 1 à chaque boucle */
      i++;
    }
  }
})





