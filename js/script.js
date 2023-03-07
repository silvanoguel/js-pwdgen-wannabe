// RACCOLTA DATI
// chiedere il nome all'utente
const username = prompt("Ciao utente! Come ti chiami?");
console.log(username);

// chiedere il cognome all'utente
const userSurname = prompt("Qual'è il tuo cognome?");
console.log(userSurname);

// chiedere il suo colore preferito
const userColor = prompt("Qual'è il tuo colore preferito?");
console.log(userColor);

// ELABORAZIONE DATI
// creazione password con aggiunta
const userPassword = username + userSurname + userColor + 21;
console.log(userPassword);

// Preparazione messaggio con il risultato
const message = userPassword

// OUTPUT MESSAGGIO
// stampo il messaggio
document.getElementById('user-password').innerHTML = message;
