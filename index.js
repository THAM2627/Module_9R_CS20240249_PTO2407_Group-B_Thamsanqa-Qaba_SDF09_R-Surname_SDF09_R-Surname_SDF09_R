// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards

let firstCard = 9
let secondCard = 7

let sum = firstCard + secondCard
let hasBlackJack = false

if(sum <= 20) {
    console.log("Do you want to draw a new card?")
    } else if (sum === 21) {
        console.log("We've got a Winner")
        hasBlackJack = true
    } else {
        console.log("Oh,sorry. Would you like to try again?")
    }

console.log(sum)