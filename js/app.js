"use strict";

function newNum() { 
    screen.textContent += this.textContent;
}

function newOperator() {
    screen = document.querySelector("#result");
    screen.textContent += this.textContent;
}

function deleteResult() {
    screen.textContent = 0;
}

function result() {
    console.log(screen.textContent);
    console.log((screen.textContent).length-1);
    let i = 1;
    let result = 0;
    console.log(screen.textContent.indexOf("+"));
    if (screen.textContent.indexOf("+") != -1) {
        while (screen.textContent[i] != "+") {
            console.log(screen.textContent[i]);
            i++;
            result += screen.textContent[i-1];
        }
        console.log("Numb");
        console.log(result);
        i = (screen.textContent).indexOf("+");
        console.log(i);
        let result2 = 0;
        i++
        while (screen.textContent[i] > "+" || screen.textContent[i]<(screen.textContent).length-1) {
            console.log(screen.textContent[i]);
            result2 += screen.textContent[i];
            i++;
        }
        console.log("Numb2");
        console.log(result2);
        screen.textContent = Number(result) + Number(result2);
    }
    else if (screen.textContent.indexOf("-") != -1) {
        while (screen.textContent[i] != "-") {
            console.log(screen.textContent[i]);
            i++;
            result += screen.textContent[i-1];
        }
        console.log("Numb");
        console.log(result);
        i = (screen.textContent).indexOf("-");
        console.log(i);
        let result2 = 0;
        i++
        while (screen.textContent[i] > "-" || screen.textContent[i]<(screen.textContent).length-1) {
            console.log("test");
            console.log(screen.textContent[i]);
            result2 += screen.textContent[i];
            i++;
        }
        console.log("Numb2");
        console.log(result2);
        screen.textContent = Number(result) - Number(result2);

    }
    else if (screen.textContent.indexOf("x") != -1) {
        while (screen.textContent[i] != "x") {
            console.log(screen.textContent[i]);
            i++;
            result += screen.textContent[i-1];
        }
        console.log("Numb");
        console.log(result);

        console.log(i);
        console.log(screen.textContent[i]);
        let result2 = 0;
        i++;
    
        while (screen.textContent[i] > "x" || screen.textContent[i]<(screen.textContent).length-1) {
            console.log("test");
            console.log(screen.textContent[i]);

            result2 += screen.textContent[i];
            i++;
        }
        console.log("Numb2");
        console.log(result2);
        screen.textContent = Number(result)*Number(result2);

    }
    else if (screen.textContent.indexOf("÷") != -1) {
        while (screen.textContent[i] != "÷") {
            console.log(screen.textContent[i]);
            i++;
            result += screen.textContent[i-1];
        }
        console.log("Numb");
        console.log(result);
        i = (screen.textContent).indexOf("÷");
        console.log(i);
        let result2 = 0;
        i++
    
        while (screen.textContent[i]<(screen.textContent).length-1) {
            console.log("test");
            console.log(screen.textContent[i]);
            i++;
            result2 += screen.textContent[i-1];
        }
        console.log("Numb2");
        console.log(result2);
        screen.textContent = Number(result)/Number(result2);

    }
}

let screen = document.querySelector("#result");

let egale = document.querySelector("#egale");
egale.addEventListener("click", result);

let del = document.querySelector("#ac");
del.addEventListener("click", deleteResult);

let operators = document.querySelectorAll(".operator");

for (let i=0; i<operators.length; i++) {
    operators[i].addEventListener("click", newOperator);
    console.log(operators[i].textContent);
}

let buttons = document.querySelectorAll(".num");

for (let i=0; i<buttons.length; i++) {
    buttons[i].addEventListener("click", newNum);
}



/*
En tant qu'utilisateur, 
Je veux pouvoir appuyer sur les chiffres
Afin de les voir s'afficher dans l'écran
*/

// 1ère étape: faire en sorte qu'on peut cliquer sur un bouton
// 2ème étape: Vérifier qu'au clic du bouton, il se passe bien 
// quelque chose
// 3ème étape: Au clic du bouton, la valeur du bouton s'affiche 
// dans le console
// 4ème étape: Récupérer mon élément écran (et regarder dans la console)
// 5ème étape: Dans mon élément écran, ajouter la valeur de mon bouton
// au texte déjà existant


/*
En tant qu'utilisateur,
Je veux pouvoir appuyer sur les symboles arithmétiques
Afin qu'ils s'affichent à l'écran

// 1ère étape: faire en sorte qu'on peut cliquer sur un bouton
// 2ème étape: Vérifier qu'au clic du bouton, il se passe bien 
// quelque chose
// 3ème étape: Au clic du bouton, la valeur du bouton s'affiche 
// dans le console
// 4ème étape: Récupérer mon élément écran (et regarder dans la console)
// 5ème étape: Dans mon élément écran, ajouter la valeur de mon bouton
// au texte déjà existant


En tant qu'utilisateur,
Je veux pouvoir appuyer sur la touche AC
Afin que le calcul à l'écran se réinitialise

// 1ère étape: faire en sorte qu'on peut cliquer sur un bouton AC
// 2ème étape: Vérifier qu'au clic du bouton, il se passe bien 
// quelque chose
// 3ème étape: Récupérer l'élément écran
// 4ème étape: on vide le texte dans cet élément


En tant qu'utilisateur,
Je veux pouvoir appuyer sur une touche égale
Afin que le calcul complet s'exécute et le résultat s'affiche à l'écran

// 1ère étape: faire en sorte qu'on puisse cliquer sur un bouton =
// 2ème étape: Vérifier qu'au clic du bouton, il se passe quelque chose
// 3ème étape: Récupérer l'élément écran
// 4ème étape: On exécute le texte, et on remplace le texte précédent
// dans l'écran par le nouveau

*/