// chiedere mail all'utent
// controllare che la mail sia nella lista
// avvisare l'utente sull'esito

const email = ["correct@email.com", "your.email@email.com", "you.can.enter@email.com", "right@email.com"]

for (let i = 0; i < email.length; i++) {
    console.log(email[i])
}

let variabileControllo = false;

for (let i = 0; i < email.length; i++) {

    if (email[i] = email) {
        variabileControllo = true
    }
}

if (variabileControllo == true) {
    console.log("La mail è corretta")
} else {
    console.log("La mail è sbagliata")
}

let emailHtml = document.getElementById("email")