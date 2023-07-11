"use strict";
//const buttonEl = document.querySelectorAll("#sent");
let grandmamEl = document.querySelector("#grandmere");
let sylvestreEl = document.querySelector('#titi');
let titiEl = document.querySelector('#sylvestre');
let buttonEls = document.querySelectorAll('.carte button');
let lose = 0;let win = 0;let egal = 0;
// demande un nom
let yourName = prompt("Quel est ton nom? ")

for (let i = 0; i < buttonEls.length; i++) {
    buttonEls[i].addEventListener("click", function () {
        let userChoice = buttonEls[i].id.toLowerCase()
        let ordiChoice = buttonEls[Math.floor(Math.random() * buttonEls.length)].id.toLowerCase();
        let resultat;
        let sum = (win + lose + egal);
        let sumPourcent = (Math.round(win * 100 / sum))
// choix
        if (userChoice === ordiChoice) {
            resultat = "Vous avez fait une egalité !";
            egal += 1
        } else if ((userChoice === "grandmere" && ordiChoice === "sylvestre") ||
            (userChoice === "titi" && ordiChoice === "grandmere") ||
            (userChoice === "sylvestre" && ordiChoice === "titi")) {
            resultat = "Vous avez gagné !!";
            win += 1; userChoice
        } else {
            resultat = "Vous avez perdu !";
            lose += 1;
        }
        // calcule 
        document.querySelector(".resultat").innerHTML = `
        ${yourName} a choisi : ${userChoice} /
        L'ordi a choisi : ${ordiChoice}</br> 
        Nombre de victoires : ${win} </br> 
        Nombre de défaites : ${lose}</br>
        Egalités : ${egal} </br>
        Partie jouer en tout : ${sum} </br>
        Pourcentage de victoire : ${sumPourcent} % </br>
        <strong> ${resultat}`;

// code pour la sauvegarde on crée
        let user;
        let saveEl = document.querySelector("#save")
        if (localStorage.getItem('user')) {
            user = JSON.parse(localStorage.getItem('user'))
        } else {
            user = []
        }
// et on sauvegarde
        saveEl.addEventListener('click', (e) => {
            e.preventDefault()
            let resultSave = yourName + ' a gagner ' + sumPourcent + ' % fois '
            user.push(resultSave)
            let userstringify = JSON.stringify(user)
            localStorage.setItem('user', userstringify)
            sonTiti.play();
        })
    })
}


