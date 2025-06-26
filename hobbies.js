// console.log('Hi node.js');
// 2 - hobbies.js
// Crea una funzione che accetta tre parametri: hobbyOne, hobbyTwo, hobbyThree. La funzione dovrebbe restituire un array di stringhe contenenti gli hobby.
// Esporta la funzione dal file.

function userHobbies (hobbyOne, hobbyTwo, hobbyThree) { return ["Leggere", "Ascoltare la musica", "Visitare musei"]
}

console.log(userHobbies("hobbyOne", "hobbyTwo", "hobbyThree"));
module.export = userHobbies; 