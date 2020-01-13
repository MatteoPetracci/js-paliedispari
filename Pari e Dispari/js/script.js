// Gioco Pari e dispari:
// L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random (sempre da 1
// a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha
// vinto (controlliamo se la somma da pari o dispari).

// **********SENZA FUNZIONI************************

// var pariDispari = prompt('Scegli pari o dispari');
// var numeroUtente = parseInt(prompt('Scegli un numero da 1 a 5'));
//
// var numRandom = Math.floor(Math.random() * 5) + 1;
//
// var somma = numRandom + numeroUtente;
//
// var risultatoFinale = false;
// console.log(pariDispari);
// console.log(numeroUtente);
// console.log(numRandom);
// console.log(somma);
//
// if (somma % 2 == 0 ) {
//   risultatoFinale = true;
// } else {
//   risultatoFinale = false;
// }
//
// console.log(risultatoFinale);
//
// if (pariDispari == 'pari' && risultatoFinale == true) {
//   console.log('Hai vinto');
// } else if (risultatoFinale == true && pariDispari == 'dispari')  {
//   console.log(' Hai perso');
// } else if (risultatoFinale == false && pariDispari == 'dispari'){
//   console.log('Hai vinto');
// } else if (risultatoFinale == false && pariDispari == 'pari') {
//   console.log('Hai perso');
// }

// *********CON FUNZIONI***************************

var pariDispari = prompt('Scegli pari o dispari');
var numeroUtente = parseInt(prompt('Scegli un numero da 1 a 5'));

var veroFalso = sceltaPariDispari(numeroUtente);
console.log(numeroUtente);

var numeroRandom = numeroRandom(1,5)
console.log(numeroRandom);

var somma = sceltaPariDispari(numeroRandom + numeroUtente);
console.log(somma);

if (somma == true && pariDispari == 'pari') {
  console.log('Hai vinto');
} else if (somma == true && pariDispari == 'dispari')  {
  console.log(' Hai perso');
} else if (somma == false && pariDispari == 'dispari'){
  console.log('Hai vinto');
} else if (somma == false && pariDispari == 'pari') {
  console.log('Hai perso');
}

function numeroRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sceltaPariDispari(numero) {
  if (numero % 2 == 0 ) {
    return true;
  } else {
    return false;
  }
}
