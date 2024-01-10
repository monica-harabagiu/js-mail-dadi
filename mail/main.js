// chiedere mail all'utent
// controllare che la mail sia nella lista
// avvisare l'utente sull'esito

const email = ["correct@email.com", "your.email@email.com", "you.can.enter@email.com", "right@email.com"]

// for (let i = 0; i < email.length; i++) {
//     console.log(email[i])
// }

// let variabileControllo = false;

// for (let i = 0; i < email.length; i++) {

//     if (email[i] === "correct@email.com") {
//         variabileControllo = true
//     }
// }

// if (variabileControllo == true) {
//     console.log("La mail è corretta")
// } else {
//     console.log("La mail è sbagliata")
// }


let emailHtml = document.getElementById("email")
const resultHtml = document.getElementById("result")
const buttonHtml = document.getElementById("login-button")


function verificaEmail() {

    let variabileControllo = false;

    for (let i = 0; i < email.length; i++) {
        if (email[i] === emailHtml.value) {
            variabileControllo = true;
        }
    }

    if (variabileControllo) {
        resultHtml.innerHTML = "La mail è corretta"
        emailHtml.classList.remove("input-red")
        emailHtml.classList.add("input-green")
    } else {
        resultHtml.innerHTML = "La mail è sbagliata"
        emailHtml.classList.remove("input-green")
        emailHtml.classList.add("input-red")
    }

}


buttonHtml.addEventListener("click", verificaEmail)