// console.log("ciao bellissimi!");

const fs = require('node:fs');

let data;
//parte asincrona 


try {

data = fs.readFileSync('./input/students.csv', 'utf8');
// console.log(data);
} catch (err) {
  console.error(err);
}

const stringArray = data.split(/\r?\n/);

// console.log(stringArray);
//3) tolgo la prima riga dell'array e la metto da parte
const propertysString = stringArray.shift();
// console.log(stringArray);
// console.log(propertieString);

//4) creo un array per contenere gli studenti
const studentesArray = [];

//5) ciclo l'array di stringa
for (let i = 0; i < stringArray.length; i++) {
    // const element = stringArray[i];
    // console.log(i,element);
   const valuesString = stringArray[i];
//6) ogni giro creo un oggetto vuoto per contenere lo studente 

const student = {};

// console.log("studente vuoto", student);
// console.log("nomi delle proprieta(key)", propertieString);
// console.log("valori delle proprietà(value)", studentsString);
// console.log('-----------------------');

 

//7) spezzo le proprietà e i valori in array di stringa

const propertiesArray =  propertysString.split(";");
const valuesArray = valuesString.split(";");
console.log(propertiesArray);
console.log(valuesArray);
//8) faccip un ciclo interno sull'array delle proprietà e metto dentro lo studente il valore corrispondente alla proprietà
for (let j = 0; j < propertiesArray.length; j++) {
    const property = propertiesArray[j];
    const value = valuesArray[j];
    student[property] = value;
 
}
//9) fuori dal ciclo interno metto lo studente creato nell'array degli studenti 
   studentesArray.push(student);
    


}

console.log(studentesArray);

const jsonArray = JSON.stringify(studentesArray)

try {
  fs.writeFileSync('./output/fruit-data.json', jsonArray);
  // file written successfully
} catch (err) {
  console.error(err);
}



