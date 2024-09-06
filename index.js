let player = {
    name:"Per",
    chips: 200
}
let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard,secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = "" 
let messageEL = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEL = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor(Math.random()*11)+1
    if (randomNumber > 10){
        return 10
    } else if(randomNumber === 1){
        return 11
    } else {
        return randomNumber
    }
    }

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEL.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEL.textContent += cards[i] + " "
    }

    sumEl.textContent = " Sum: " + sum
if(sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "We've got a Winner."
        hasBlackJack = true
    } else {
        message = "Oh,sorry. Would you like to try again?"
        isAlive = false
    }
    messageEL.textContent = message
}


function newCard(){
    console.log("Drawing a new card from the deck!")
    if(isAlive === true && hasBlackJack === false) {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()
    }
}