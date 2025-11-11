// // console.log("ciao bellissimi!");

// const fs = require('node:fs'); 
/////Qui importi il modulo File System (fs) di Node.js, che serve per leggere e scrivere file.
//////Con questo modulo puoi accedere al disco, leggere file di testo, scriverne di nuovi, ecc.
// let data; //////Crei una variabile vuota che servirà per contenere il contenuto del file CSV una volta letto.



// //legge il file in modo sincrono, cioè blocca il programma finché la lettura non è finita.
// try {

// data = fs.readFileSync('./input/students.csv', 'utf8');
// // console.log(data);
// } catch (err) {
//   console.error(err);
// }

// const stringArray = data.split(/\r?\n/);

// // console.log(stringArray);
// //3) tolgo la prima riga dell'array e la metto da parte
// const propertysString = stringArray.shift();  /////shift() rimuove il primo elemento dell’array (stringArray) e lo assegna a propertysString.
//////È la riga con i nomi delle proprietà
// // console.log(stringArray);
// // console.log(propertieString);

// //4) creo un array per contenere gli studenti
// const studentesArray = []; ///////Qui prepari un array vuoto dove salverai, uno per uno, gli oggetti “studente” che ricaverai dal CSV.

// //5) ciclo l'array di stringa
// for (let i = 0; i < stringArray.length; i++) {
//     // const element = stringArray[i];
//     // console.log(i,element);
//    const valuesString = stringArray[i];/////valuesString è una riga con i valori (es. "mario;rossi;20").
///////


// //6) ogni giro creo un oggetto vuoto per contenere lo studente 

// const student = {}; //////student è un oggetto vuoto che verrà riempito con le proprietà.

// // console.log("studente vuoto", student);
// // console.log("nomi delle proprieta(key)", propertieString);
// // console.log("valori delle proprietà(value)", studentsString);
// // console.log('-----------------------');

 

// //7) spezzo le proprietà e i valori in array di stringa

// const propertiesArray =  propertysString.split(";");
// const valuesArray = valuesString.split(";");
// console.log(propertiesArray);
// console.log(valuesArray);
// //8) faccip un ciclo interno sull'array delle proprietà e metto dentro lo studente il valore corrispondente alla proprietà
// for (let j = 0; j < propertiesArray.length; j++) {
//     const property = propertiesArray[j];
//     const value = valuesArray[j];
//     student[property] = value;
 
// }
// //9) fuori dal ciclo interno metto lo studente creato nell'array degli studenti 
//    studentesArray.push(student); /////Ogni studente creato viene aggiunto all’array studentesArray.
    


// }

// console.log(studentesArray);

// const jsonArray = JSON.stringify(studentesArray)

// try {
//   fs.writeFileSync('./output/fruit-data.json', jsonArray);
//   // file written successfully
// } catch (err) {
//   console.error(err);
// }



// //facciamo il contrario 

// console.log("ciao bellissimi!");

const fs = require('node:fs');

let data;

// 1) Leggo il file JSON in modo sincrono
try {
  data = fs.readFileSync('./output/fruit-data.json', 'utf8');
} catch (err) {
  console.error(err);
}

// 2) Converto il JSON in array di oggetti
const studentsArray = JSON.parse(data);

// 3) Estraggo le proprietà (le intestazioni) dal primo oggetto
const propertiesArray = Object.keys(studentsArray[0]);

// 4) Creo l’intestazione CSV
const header = propertiesArray.join(';');

// 5) Creo le righe con i valori
const rows = studentsArray.map(student => {
  return propertiesArray.map(prop => student[prop]).join(';');
});

// 6) Unisco tutto in una singola stringa CSV
const csvString = [header, ...rows].join('\n');

// 7) Scrivo il CSV su file
try {
  fs.writeFileSync('./input/students-from-json.csv', csvString);
  console.log('✅ File CSV creato con successo!');
} catch (err) {
  console.error(err);
}
