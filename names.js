console.log('Hi node.js');
// 1 - names.js
// Crea una funzione che accetta due parametri: firstName, lastName. La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.
// Esporta la funzione dal file. 

function userName(firstName, lastName) {
    return {
        firstName: "Elliot",
        lastName: "Reid",
    }
}

console.log(userName("firstName", "lastName"));

module.exports = userName;