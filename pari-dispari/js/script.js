
const sceltaPariDispari = prompt("scegli pari o dispari");
const sceltaNumero = prompt ("scegli un numero da 1 a 5");
let somma;

const numeroUtente = parseInt(sceltaNumero);

console.log(sceltaPariDispari);
console.log(`il tuo numero è ${numeroUtente}`);

const numeroComputer = numeroRandom(1,5);  // numeroComputer = return numeroRandom     1 = min  5 = max
console.log(`il numero del computer è ${numeroComputer}`);

somma= numeroComputer + numeroUtente;
console.log(somma);

const risposta = pariDispari(somma , sceltaPariDispari) ;  //risposta = return PariDispari 

console.log(risposta);
