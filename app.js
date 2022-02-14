// parolaUtente = parolaUtente.replace(/\s/g, "");
// console.log(parolaUtente);

// const lettere = parolaUtente.split("");
// lettere.reverse();
// console.log(lettere);

// const parolaInversa = lettere.join("");
// console.log(parolaInversa);

// if (parolaUtente === parolaInversa) {
//     console.log(parolaUtente, parolaInversa, "la parola è un palindromo");
// } else {
//     console.log(parolaUtente, parolaInversa, "la parola non è un palindromo");
// };
// palindromo

// chiedo all'utente una parola
// inverto l'ordine delle lettere per creare il palindromo
// controllo che la parola sia palindroma
// restituisco un messaggio all'utente

// let parolaUtente = prompt("inserisci una parola");
// if (eUnPalindromo(parolaUtente) == true) {
//     console.log("è un palindromo");
// } else {
//     console.log("non è un palindromo");
// }

// function eUnPalindromo (parolaUtente) {
//     parolaUtente = parolaUtente.replace(/\s/g, "");
//     console.log(parolaUtente);

//     const lettere = parolaUtente.split("");
//     lettere.reverse();
//     console.log(lettere);

//     const parolaInversa = lettere.join("");
//     console.log(parolaInversa);

//     if (parolaUtente === parolaInversa) {
//         return true;
//     } else {
//         return false;
//     }
// }



// pari e dispari

// chiedo all'utente di scegliere fra pari e dispari
// chiedo all'utente un numero da 1 a 5
// genero un numero random da 1 a 5 per il pc 
// faccio la somma dei due numeri 
// stabilisco se la somma è pari o dispari
// restituisco il messaggio all'utente


// const pariODispari = prompt("scegli tra pari o dispari");
// console.log(pariODispari);
// const numeroUtente = prompt("inserisci un numero da 1-5");
// console.log(numeroUtente);


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playPariDispari () {
    const pariODispari = document.getElementById("pari-dispari").value;
    console.log(pariODispari);
    const numeroUtente = document.getElementById("numero").value;
    console.log(numeroUtente);
    const numeroPc = getRandomInt(1, 5);
    console.log(numeroPc);
    const somma = parseFloat(numeroUtente) + numeroPc;
    console.log(somma);
    
    if (pariODispari === "pari" && somma % 2 == 0) {
        console.log("hai vinto!");
    } else if (pariODispari === "dispari" && somma % 2 != 0) {
        console.log("hai vinto");
    } else {
        console.log("hai perso");
    }
}


document.getElementById("play").addEventListener("click", playPariDispari());






