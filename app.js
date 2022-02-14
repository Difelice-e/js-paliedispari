
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

let parolaUtente = prompt("inserisci una parola");
if (eUnPalindromo(parolaUtente) == true) {
    console.log("è un palindromo");
} else {
    console.log("non è un palindromo");
}

function eUnPalindromo (parolaUtente) {
    parolaUtente = parolaUtente.replace(/\s/g, "");
    console.log(parolaUtente);

    const lettere = parolaUtente.split("");
    lettere.reverse();
    console.log(lettere);

    const parolaInversa = lettere.join("");
    console.log(parolaInversa);

    if (parolaUtente === parolaInversa) {
        return true;
    } else {
        return false;
    }
}




// palindromo

// chiedo all'utente una parola
// inverto l'ordine delle lettere per creare il palindromo
// controllo che la parola sia palindroma
// restituisco un messaggio all'utente





// pari e dispari

// chiedo all'utente di scegliere fra pari e dispari
// chiedo all'utente un numero da 1 a 5
// genero un numero random da 1 a 5 per il pc 
// faccio la somma dei due numeri 
// stabilisco se la somma è pari o dispari
// restituisco il messaggio all'utente