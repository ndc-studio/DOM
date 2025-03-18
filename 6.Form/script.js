const firstInput = document.getElementById('firstname');
const displayInput = document.getElementById('display-firstname');

firstInput.addEventListener('blur', function() {
    if (firstInput.value.length >= 3 && ageInput.value < 20) {
        alert(`Le nom que vous avez entré est valide`)
    } else {
        alert(`Le nom que vous avez entré n'est pas valide, le nom doit avoir entre 3 et 20 caractères`)
    }
})

firstInput.addEventListener('keyup', function() {
    if (firstInput.value.length < 3 || firstInput.value.length >= 20) {
        displayInput.textContent = "";
    } else {
        displayInput.textContent = firstInput.value;
    }
  
})

const ageInput = document.getElementById('age');

ageInput.addEventListener('blur', function() {
    if (ageInput.value >= 1 && ageInput.value < 110) {
        alert(`L'age que vous avez entré est valide continuez`)
    } else {
        alert(`L'age que vous avez entré n'est pas valide, vous ne pouvez pas avoir ${ageInput.value} ans`)
    }
})

ageInput.addEventListener('keyup', function() {
    const truth = document.getElementById('a-hard-truth');
    if (ageInput.value >= 18 && ageInput.value < 110) {
        truth.style.visibility = 'visible';
    } else {      
        truth.style.visibility = 'hidden';
    }
})

const pwd = document.getElementById('pwd');
const pwdConfirm = document.getElementById('pwd-confirm');

pwd.addEventListener('blur', function(event) {
    if (pwd.value.length < 6) {   
        alert(`Le mot de passe doit contenir au moins 6 caractères`)
    } else {        
        alert(`Le mot de passe est valide`)
    }
})

pwd.addEventListener('keyup', function(event) {
    if (pwd.value.length < 6) {
        pwd.style.borderColor = 'red';
    } else {
        pwd.style.borderColor = 'green';
    }
})

pwdConfirm.addEventListener('blur', function(event) {
    if (pwdConfirm.value.length < 6 && pwdConfirm.value !== pwd.value) {   
        alert(`Le mot de passe doit être identique que le premier et contenir au moins 6 caractères`)
    } else {
        alert(`Mot de passe validé`)
    }
})

pwdConfirm.addEventListener('keyup', function() {
    if (pwdConfirm.value !== pwd.value || pwdConfirm.value.length < 6) {
        pwd.style.borderColor = 'red';
        pwdConfirm.style.borderColor = 'red';
    } else if (pwdConfirm.value === pwd.value && pwdConfirm.value.length >= 6){
        pwdConfirm.style.borderColor = 'green';       
        pwd.style.borderColor = 'green';
    }
})

const mode = document.getElementById('toggle-darkmode');

mode.addEventListener('change', function() {
    if (mode.value === 'dark') {
       document.body.style.backgroundColor = "#303030";
       document.body.style.color = "#959595";
    } else if (mode.value === 'light') {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
})



