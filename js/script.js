//  Scrivi una funzione per capire se la parola è palindroma
//  Creare un array contenente tutti i singoli caratteri della stringa inserita dall'utente

// var parolaUtente = prompt('Inserisci una parola');
//
// //  Metodo Split()
//
// var split = parolaUtente.split('');
// console.log(split);
//
// //  invertire la disposizione degli elementi che compongono l' array
//
// // Metodo Reverse()
//
// var reverse = split.reverse();
// console.log(reverse);
//
// //  Riunire gli elementi di un array in una stringa.
//
// //  Metodo join()
//
// var join = reverse.join('');
// console.log(join);
//
// var parola = false;
//
// //  Recuperare un valore booleano
//
// if(parolaUtente == join) {
//   parola = true;
// } else {
//   parola = false;
// }
// console.log(parola);
//
// if (parola == true) {
//   console.log('Questa parola è polindroma');
// } else {
//   console.log('Questa parola non è polindroma');
// }


var parolaUtente = prompt('Inserisci una parola');


function polindroma(parola) {
  var split = parolaUtente.split('');
  var reverse = split.reverse();
  var join = reverse.join('');
  if(parolaUtente == join) {
    return true;
  } else {
    return false;
  }
}

var polindromaParola = polindroma(parolaUtente);

if (polindromaParola == true) {
   console.log('Questa parola è polindroma');
} else {
  console.log('Questa parola non è polidroma');
}
