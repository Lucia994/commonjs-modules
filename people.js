console.log('Hi node.js');
// 3 - people.js
// Importa la tua funzione da names.js
// Importa la tua funzione da hobbies.js
// Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies. All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.

const userName = require("./names.js");
const userHobbies = require("./hobbies.js");

console.log(userName, userHobbies);

function user() {
    return {
        fullName: `$ {userName.firstName} ${userName.lastName}`,
        hobbies: `$ {userhobbies.hobbyOne} ${userHobbies.hobbyTwo} ${userHobbies.hobbyThree}`,
    }
}

console.log(user);