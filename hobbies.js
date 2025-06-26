// console.log('Hi node.js');
// 2 - hobbies.js
// Crea una funzione che accetta tre parametri: hobbyOne, hobbyTwo, hobbyThree. La funzione dovrebbe restituire un array di stringhe contenenti gli hobby.
// Esporta la funzione dal file.

function userHobbies(hobbyOne, hobbyTwo, hobbyThree) { 
    return [
        hobbyOne, 
        hobbyTwo,
        hobbyThree,
    ];
}

console.log(userHobbies("Leggere", "Visitare musei", "Ascoltare la musica"));


module.exports = userHobbies; 