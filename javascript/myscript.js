// Inizializzo le due variabili
let chilometriDaPercorrere = parseInt (prompt("Indicare quanti chilometri vuole percorrere"));
let etàPasseggero = parseInt (prompt ("Indicare l'età del passeggero"));

// Controllo tramite il log il valore dell'età del passeggero e dei chilometri da percorrere
console.log(etàPasseggero);
console.log(chilometriDaPercorrere);

let prezzoBase = chilometriDaPercorrere * 0.21;
let scontoGiovani = (prezzoBase * 20) / 100;
let scontoAnziani = (prezzoBase * 40) / 100;

// Controllo dunque il valore del prezzo base e dei tuoi sconti
console.log(prezzoBase.toFixed(2));
console.log(scontoGiovani.toFixed(2));
console.log(scontoAnziani.toFixed(2));

// Inizializzo la variabile finale senza specificarla
var prezzoTotale;

// Imposto la condizione per la quale applicare i due sconti
if (etàPasseggero < 18){
    prezzoTotale = prezzoBase - scontoGiovani;
} else if (etàPasseggero >= 65){
    prezzoTotale = prezzoBase - scontoAnziani;
} else {
    prezzoTotale = prezzoBase;
}

// Ultimo controllo se il prezzo finale è stato calcolato correttamente
var prezzoTotale = prezzoTotale.toFixed(2);
console.log(prezzoTotale);

// Scrivo quindi sull'html il risultato del prezzo del biglietto
document.getElementById("prezzo_finale").innerHTML = prezzoTotale;

