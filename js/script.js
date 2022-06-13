// Richiesta dei dati all'utente
const userName = prompt("Inserisci il tuo nome");
const userLastName = prompt("Inserisci il tuo cognome");
const userFavoriteColor = prompt("Inserisci il tuo colore preferito");
console.log(userName, userLastName, userFavoriteColor);
// Scrittura a schermo della password generata
document.getElementById("user-password").innerHTML = userName + userLastName + userFavoriteColor + "22";
