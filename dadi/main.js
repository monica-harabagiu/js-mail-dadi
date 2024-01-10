/* - Genera un numero random da 1 a 6
    - per il giocatore
    - per il computer */
// Vincitore -> numero più alto

const bottoneHtml = document.getElementById("start-game")
let numeroDadoPlayer = document.getElementById("player-card")
let numeroDadoComputer = document.getElementById("computer-card")
const cardResult = document.getElementById("card-result")

function numeroDado(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function attivaGioco() {

    let computerScore = numeroDadoComputer.innerHTML = numeroDado(1, 6)

    let playerScore = numeroDadoPlayer.innerHTML = numeroDado(1, 6)

    if (computerScore > playerScore) {
        document.getElementById("winner").innerHTML = "CP ha vinto! Prova ancora"
    } else if (computerScore < playerScore) {
        document.getElementById("winner").innerHTML = "Congratulazioni, hai vinto!"
    } else {
        document.getElementById("winner").innerHTML = "Pareggio! Prova ancora"
    }

    cardResult.classList.add("container")

}

bottoneHtml.addEventListener("click", attivaGioco)
