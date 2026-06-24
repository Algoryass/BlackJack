let firstCard = getRandomNumber()
let secondCard = getRandomNumber()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
//let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el") // query Selector instead of getElementById
let cardsEL = document.querySelector("#cards-el")
console.log(messageEl)
console.log(cardsEL)

function startGame() {
    renderGame()
}

function getRandomNumber() {

    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }

}
function renderGame() {
    sumEl.textContent = "Sum: " + sum
    cardsEL.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEL.textContent += cards[i] + " "
    }

    if (sum <= 20) {
        message = "Do you want to draw a new card"
    } else if (sum === 21) {
        message = "You've got blackjack"
    } else {
        message = "You're out of the game"
        isAlive = false
    }

    messageEl.textContent = message

    console.log(message)

}

function newCard() {
    console.log("Drawing a new card from the deck!")

    let newCard = getRandomNumber()
    sum += newCard
    cards.push(newCard)
    console.log(cards)
    renderGame()
}

