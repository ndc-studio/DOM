
const children_body = Array.from(document.getElementsByTagName('li'));
const body = document.querySelector("body");
const ul = document.querySelector('ul');


let see = new Set();
let fast = "";

const new_div = document.createElement("div");

const new_select = document.createElement("select");

const new_option1 = document.createElement("option");
new_option1.textContent = "Important franchises";

const new_option2 = document.createElement("option");
new_option2.textContent = "Normal franchises";

new_select.appendChild(new_option1);
new_select.appendChild(new_option2);

new_div.appendChild(new_select);

body.insertBefore(new_div, ul);

/** @description -- Boucle for...of itere les <li> contenues dans children_body */
for (let i = 0; i < children_body.length; i++) {
    let element = children_body[i];
    /** @description -- condition : li.nodeType doit etre = a 1 */
    if (element.nodeType === 1) {
        /** @description -- condition : doit contenir le texte Fast and furious et ne doit pas être le premier element de la liste lors de l'iteration */
        if (element.textContent === 'Fast and Furious') {
            /** @description -- Insère l'element au debut de la liste*/
            ul.insertBefore(element, ul.firstChild);
            /** @description -- Ajout une classe "important" à l'element */
            element.classList.add('important');
        }
    }

    body.addEventListener('keyup', function(event) {
        if (event.key === 'r' || event.key === 'R') {
            /** @description -- Mélanger les éléments, en excluant le premier */
            let firstElement = ul.firstChild;
            let restOfChildren = Array.from(ul.children).slice(1);
            restOfChildren.sort(() => Math.random() - 0.5); // Mélanger les éléments

            /** @description -- Réattacher le premier élément en haut */
            ul.innerHTML = ''; // Effacer la liste
            ul.appendChild(firstElement); // Remettre le premier élément
            restOfChildren.forEach(child => ul.appendChild(child)); // Ajouter les autres éléments mélangés
        }
    });

    const text = element.textContent.trim();
  
    // Vérifier si le texte a déjà été rencontré
    if (see.has(text)) {
      // Si oui, supprimer l'élément <li>
      ul.removeChild(element);
    } else {
      // Sinon, ajouter le texte au Set
      see.add(text);
    }

    element.addEventListener('click', function() {
        if (element.textContent === 'Fast and Furious') {
            console.log("The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family.")
        } else  {    
            alert(element.textContent)
        }
    });
    
    
    new_select.addEventListener('change', function () {
        const selectedOption = new_select.value;
        children_body.forEach(function(element) {
            if (element.classList.contains('important')) {
                if (selectedOption === "Important franchises") {
                    element.style.visibility = 'visible';
                } else {
                    element.style.visibility = 'hidden';
                }
            } else {
                if (selectedOption === "Normal franchises") {
                    element.style.visibility = 'visible';
                } else {
                    element.style.visibility = 'hidden';
                }
            }
        });
    });
    




}


body.addEventListener('keyup', function(event) {
    if (event.key === 'd' || event.key === 'D') {
        let elem = ul.firstChild
        let clone = elem.cloneNode(true)
        ul.appendChild(clone)
    }
});

function alert(name) {
    console.log(name);
}
