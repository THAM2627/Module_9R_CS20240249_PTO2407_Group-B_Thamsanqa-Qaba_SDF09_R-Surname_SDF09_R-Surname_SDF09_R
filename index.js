// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards

let firstCard = 9
let secondCard = 7
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = "" 

if(sum <= 20) {
    console.log("Do you want to draw a new card?")
    } else if (sum === 21) {
        message = "We've got a Winner"
        hasBlackJack = true
    } else {
        message = "Oh,sorry. Would you like to try again?"
        isAlive = false
    }

console.log(message)