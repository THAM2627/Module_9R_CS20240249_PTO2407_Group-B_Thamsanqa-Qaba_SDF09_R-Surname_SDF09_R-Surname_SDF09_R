let firstCard = 9
let secondCard = 7
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = "" 

let messageEL = document.getElementById("BJack__message")
let sumEl = document.getElementById("sum-el")
let cardsEL = document.getElementById("cards-el")

function startGame(){
    cardsEL.textContent = "Cards: " + firstCard + " " + secondCard
    sumEl.textContent = " Sum: " + sum
if(sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "We've got a Winner"
        hasBlackJack = true
    } else {
        message = "Oh,sorry. Would you like to try again?"
        isAlive = false
    }
}
messageEL.textContent = message

function newCard(){
    console.log("Drawing a new card from the deck!")
    let card = 7
}