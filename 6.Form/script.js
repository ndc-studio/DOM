/** @const {HTMLElement} firstInput -- Cible la balise qui a l'id firstname */
const firstInput = document.getElementById('firstname');
/** @const {HTMLElement} displayInput -- Cible la balise qui a l'id display-firstname */
const displayInput = document.getElementById('display-firstname');
/** @const {HTMLElement} ageInput -- Cible la balise qui a l'id age */
const ageInput = document.getElementById('age');
/** @const {HTMLElement} pdw -- Cible la balise qui a l'id pwd */
const pwd = document.getElementById('pwd');
/** @const {HTMLElement} pdwConfirm -- Cible la balise qui a l'id pwd-confirm */
const pwdConfirm = document.getElementById('pwd-confirm');
/** @const {HTMLElement} mode -- Cible la balise qui a l'id toggle-darkmode */
const mode = document.getElementById('toggle-darkmode');

/** @description -- permet d'envoyer une alerte quand nous avons terminer d'entrer une valeur dans le champ de saisie */
firstInput.addEventListener('blur', function() {
    if (firstInput.value.length >= 3 || ageInput.value < 20) {
        alert(`Le nom que vous avez entré est valide`)
    } else {
        alert(`Le nom que vous avez entré n'est pas valide, le nom doit avoir entre 3 et 20 caractères`)
    }
})

/** @description -- Remplit le textContent de displayInput avec la valeur saisie dans firstInput */
firstInput.addEventListener('keyup', function() {
    /** @description -- Verifie que l'utilisateur saisisse un nom entre 3 et 20 caractères maximum */
    if (firstInput.value.length < 3 || firstInput.value.length >= 20) {
        /** @description -- Renvoie le champ vide */
        displayInput.textContent = "";
    } else {
        /** @description -- Ajoute a textContent la valeur saisie dans firstInput */
        displayInput.textContent = firstInput.value;
    }
})

/** @description -- permet d'envoyer une alerte quand nous avons terminer d'entrer une valeur dans le champ de saisie */
ageInput.addEventListener('blur', function() {
    /** @description -- Verifie que l'utilisateur saisisse un age entre 1 et 110 */
    if (ageInput.value >= 1 && ageInput.value <= 110) {
        alert(`L'age que vous avez entré est valide continuez`)
    } else {
        alert(`L'age que vous avez entré n'est pas valide, vous ne pouvez pas avoir ${ageInput.value} ans`)
    }
})

/** @description -- Ajoute un evenement pour afficher truth si la personne a 18 ans ou plus */
ageInput.addEventListener('keyup', function() {
    const truth = document.getElementById('a-hard-truth');
    if (ageInput.value >= 18 && ageInput.value < 110) {
        truth.style.visibility = 'visible';
    } else {      
        truth.style.visibility = 'hidden';
    }
})

/** @description -- Permet d'envoyer une alerte quand nous avons terminer d'entrer une valeur dans le champ de saisie */
pwd.addEventListener('blur', function(event) {
    if (pwd.value.length < 6) {   
        alert(`Le mot de passe doit contenir au moins 6 caractères`)
    } else {        
        alert(`Le mot de passe est valide`)
    }
})

/** @description -- Ajoute un evenement pour changer la couleur des bordures en fonction des critères de mot de passe */
pwd.addEventListener('keyup', function(event) {   
    if (pwd.value.length < 6) {
        pwd.style.borderColor = 'red';
    } else {
        pwd.style.borderColor = 'green';
    }
})

/** @description -- permet d'envoyer une alerte quand nous avons terminer d'entrer une valeur dans le champ de saisie */
pwdConfirm.addEventListener('blur', function(event) {
    if (pwdConfirm.value.length < 6 && pwdConfirm.value !== pwd.value) {   
        alert(`Le mot de passe doit être identique que le premier et contenir au moins 6 caractères`)
    } else {
        alert(`Mot de passe validé`)
    }
})

/** @description -- Ajoute un evenement pour changer la couleur des bordures en fonction des critères de mot de passe */
pwdConfirm.addEventListener('keyup', function() {
    if (pwdConfirm.value !== pwd.value || pwdConfirm.value.length < 6) {
        pwd.style.borderColor = 'red';
        pwdConfirm.style.borderColor = 'red';
    } else if (pwdConfirm.value === pwd.value && pwdConfirm.value.length >= 6){
        pwdConfirm.style.borderColor = 'green';       
        pwd.style.borderColor = 'green';
    }
})

/** @description -- Change la couleur de fond et d'ecriture en fonction du mode light ou dark */
mode.addEventListener('change', function() {
    if (mode.value === 'dark') {
       document.body.style.backgroundColor = "#303030";
       document.body.style.color = "#959595";
    } else if (mode.value === 'light') {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
})