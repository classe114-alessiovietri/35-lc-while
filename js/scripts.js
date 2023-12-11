// Ciclo FOR che va da 0 a 9
// for (let i = 0; i <= 9; i++) {
//     console.log('FOR', i);

//     // Altro
// }

// Ciclo WHILE che va da 0 a 9
// let j = 0;
// while (j <= 9) {
//     console.log('WHILE', j);

//     // Altro

//     j++;
// }

/* 

    PARTO CON j = 0

    ENTRO NEL WHILE? SI perché j <= 9 (cioè è 0)
    - stampo in console "WHILE 0"
    - incremento j a 1
    TORNO SU alla riga 8
    ENTRO NEL WHILE? SI perché j <= 9 (cioè è 1)
    - stampo in console "WHILE 1"
    - incremento j a 2
    TORNO SU alla riga 8
    ...
    ENTRO NEL WHILE? SI perché j <= 9 (cioè è 8)
    - stampo in console "WHILE 8"
    - incremento j a 9
    TORNO SU alla riga 8
    ENTRO NEL WHILE? SI perché j <= 9 (cioè è 9)
    - stampo in console "WHILE 9"
    - incremento j a 10
    TORNO SU alla riga 8
    ENTRO NEL WHILE? NO perché j non è più <= 9

*/

// j = 0;
// while (j <= 9) {
//     j++;

//     console.log('WHILE', j);

//     // Altro
// }

/* 

    PARTO CON j = 0

    ENTRO NEL WHILE? SI perché j <= 9 (cioè è 0)
    - incremento j a 1
    - stampo in console "WHILE 1"
    TORNO SU alla riga 8
    ...
    ENTRO NEL WHILE? SI perché j <= 9 (cioè è 9)
    - incremento j a 10
    - stampo in console "WHILE 10"
    TORNO SU alla riga 8
    ENTRO NEL WHILE? NO perché j non è più <= 9
    
*/


/* 

    CONSEGNA
    Data una lista di animali, chiedere all'utente un animale e controllare se è in lista

*/

// const animals = [
//     'gatto',
//     'cane',
//     'armadillo',
//     'capibara',
// ];

// const userAnimal = prompt('Che animale stai cercando?');
// console.log('userAnimal', userAnimal, typeof userAnimal);

// let foundAnimal = false;

// // for (let i = 0; i < animals.length && foundAnimal == false; i++) {
// //     console.log(animals[i]);

// //     if (animals[i] == userAnimal) {
// //         foundAnimal = true;
// //         console.log('ESCO');
// //     }

// // }

// let i = 0;
// while (i < animals.length && foundAnimal == false) {
//     console.log(animals[i]);

//     if (animals[i] == userAnimal) {
//         foundAnimal = true;
//         console.log('ESCO');
//     }

//     i++;
// }

// if (foundAnimal) {
//     alert('L\'animale che stai cercando esiste');
// }
// else {
//     alert('Animale non trovato');
// }

// let km = parseInt(prompt('Inserisci il numero di km:'));
// console.log('km', km, typeof km);

// while (isNaN(km)) {
//     alert('Inserisci un numero valido!');

//     km = parseInt(prompt('Inserisci il numero di km:'));
// }

// let km;

// do {
//     km = parseInt(prompt('Inserisci il numero di km:'));

//     if (isNaN(km)) {
//         alert('Inserisci un numero valido!');
//     }
// } while (isNaN(km));

// alert('SUCCESSO - Hai inserito ' + km + ' km');

// if (isNaN(km)) {
//     alert('Ti avevo chiesto un numero!');
// }
// else {
//     alert('Hai inserito ' + km + ' km');
// }

// const ranking = parseInt(prompt('In che posizione sei?'));

// Se ranking = 1 -> alert sei primo
// if (ranking === 1) {
//     alert('Sei primo');
// }
// // Se ranking = 2 -> alert sei secondo
// else if (ranking === 2) {
//     alert('Sei secondo');
// }
// // Se ranking = 3 -> alert sei terzo
// else if (ranking === 3) {
//     alert('Sei terzo');
// }
// // Altrimenti -> alert non sei sul podio
// else {
//     alert('Non sei sul podio');
// }

// const ranking = parseInt(prompt('In che posizione sei?'));
// const ranking = (prompt('In che posizione sei?'));

// switch (ranking) {

//     case '1': // ranking === '1'
//     case 1: // ranking === 1
//         alert('Sei primo');
//         console.log('Sei primo');
//         break;

//     case '2': // ranking === '2'    
//     case 2: // ranking === 2
//         alert('Sei secondo');
//         console.log('Sei secondo');
//         break;

//     case '3': // ranking === '3'    
//     case 3: // ranking === 3
//         alert('Sei terzo');
//         console.log('Sei terzo');
//         break;

//     default: // equivalente all'else
//         alert('Non sei sul podio');
//         console.log('Non sei sul podio');
//         break;

// }

// switch (VARIABILEoVALORE) {

//     case VALORE:    // VARIABILEoVALORE === VALORE
//         // CODICE DA ESEGUIRE NEL CASO IN CUI VARIABILEoVALORE SIA IDENTICO A VALORE
//         break;

// }

/* 

    CONSEGNA
    Chiedi numeri all'utente finché la somma dei numeri inseriti è minore di 100

*/

let sum = 0;

while (sum < 100) {

    const userNumber = parseInt(prompt('Inserisci un numero:'));
    console.log('userNumber', userNumber, typeof userNumber);

    sum += userNumber;
    console.log('sum', sum, typeof sum);
    
}

alert('Hai superato il cento!');