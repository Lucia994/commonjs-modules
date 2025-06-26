// console.log('Hi node.js');
// 1 - names.js
// Crea una funzione che accetta due parametri: firstName, lastName. La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.
// Esporta la funzione dal file. 

function userName(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName,
    }
}

console.log(userName("Lucia", "Summa"));

module.exports = userName;