/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/

const pets = ["dog", "cat", "hamster", "redfish"];

console.log("🔹 ESERCIZIO 1:", pets);

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

pets.sort();

console.log("🔹 ESERCIZIO 2:", pets.sort());

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

console.log("🔹 ESERCIZIO 3:", pets.reverse());

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
// pets.push(pets.splice(0, 1)[0]);
// console.log("🔹 ESERCIZIO 4:", pets);

pets.push(pets.shift());
console.log("🔹 ESERCIZIO 4:", pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/

const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"]
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"]
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"]
  }
];

for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = 0;
}

console.log("🔹 ESERCIZIO 5:", cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

cars.push({
  brand: "Fiat",
  model: "Panda",
  color: "rusty green",
  trims: ["everlasting", "4x4"],
  licensePlate: 0
});

// for (let i = 0; i < cars.length; i++) {
//   delete cars[i].trims;
// }

console.log("🔹 ESERCIZIO 6:", cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/

const justTrims = [];

for (let i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims[0]);
}

console.log("🔹 ESERCIZIO 7:", justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for (let i = 0; i < cars.length; i++) {
  if (cars[i].color[0] === "b") {
    console.log("🔹 ESERCIZIO 8: Fizz");
  } else {
    console.log("🔹 ESERCIZIO 8: Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/

const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105
];

console.log("🔹 ESERCIZIO 9:");

let i = 0;
while (i != numericArray.length) {
  if (numericArray[i] === 32) {
    break;
  }
  console.log(numericArray[i]);
  i++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/

const charactersArray = ["g", "n", "u", "z", "d"];
let numbersArray = [];

for (let i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i]) {
    case "d":
      numbersArray.push("5");
      break;
    case "g":
      numbersArray.push("8");
      break;
    case "n":
      numbersArray.push("14");
      break;
    case "u":
      numbersArray.push("21");
      break;
    case "z":
      numbersArray.push("26");
      break;
    default:
      console.log(charactersArray[i], "non è una lettera!");
  }
}
console.log("🔹 ESERCIZIO 10:", numbersArray);
