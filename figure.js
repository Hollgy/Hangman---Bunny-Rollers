import { randomize, restart } from "./functions.js"

let correct = document.querySelector('.correct_letters')
let incorrect = document.querySelector('.wrong_letters')
let main = document.querySelector('body')
let correctAnswers = document.querySelector('#correctAnswers')
let correctList = document.querySelector('#correctList')
let wrongList = document.querySelector('#wrongList')
let lossDisplay = document.querySelector('.hung-screen')
let winDisplay = document.querySelector('.win-screen')

let hangman = {
    ground: document.querySelector('#ground'),
    scaffold: document.querySelector('#scaffold'),
    legs: document.querySelector('#legs'),
    arms: document.querySelector('#arms'),
    body: document.querySelector('#body'),
    head: document.querySelector('#head')
}

const ground = hangman.ground
const scaffold = hangman.scaffold
const head = hangman.head
const body = hangman.body
const arms = hangman.arms
const legs = hangman.legs
const invisible = 'none'
const visible = 'block'

winDisplay.style.display = invisible
lossDisplay.style.display = invisible
ground.style.display = invisible
scaffold.style.display = invisible
head.style.display = invisible
body.style.display = invisible
arms.style.display = invisible
legs.style.display = invisible

let shuffle = randomize()

// Create gusses ul
let guesses = [];
let guess
function result() {
    for (let i = 0; i < shuffle.length; i++) {
        correct.setAttribute('id', 'word');
        guess = document.createElement('li');
        guess.setAttribute('class', 'guess');
        guess.innerHTML = "_";

        guesses.push(guess);
        correctAnswers.append(correctList);
        correctList.append(guess);
        restart()
    }
}

result()
let countCorrect = 0
// Guess letter
console.log(shuffle)
main.addEventListener('keyup', event => {
    console.log('Key down: ', event.key)
    function correctGuess() {
        for (let x = 0; x < shuffle.length; x++) {
            if (shuffle[x].toLowerCase() === event.key) {
                console.log(guesses);
                console.log('Correct guess')
                guesses[x].innerHTML = event.key.toUpperCase()
                countCorrect++
                console.log(countCorrect);
                guesses[x] = false
            }
            if (countCorrect === shuffle.length) {
                // uppdatera användarens poäng
                updateUserScore();
                winDisplay.style.display = visible
            }
        }
    }
    correctGuess()

    const onlyLetter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'å', 'ä', 'ö']
    // Incorrect guesses
    function incorrectGuess() {
        const drawing = [ground, scaffold, head, body, arms, legs]

        // Draw when the guess is wrong
        if (shuffle.toLowerCase().includes(event.key) == false && onlyLetter.includes(event.key) == true) {
            drawing[countWrongAnswer].style.display = visible
            countWrongAnswer++
            console.log('incorrect guess')

            // Print out wrong letters
            incorrect.setAttribute('id', 'word')
            const item = document.createElement('li')
            item.setAttribute('class', 'wrongGuess')
            item.textContent = event.key.toUpperCase()
            wrongList.append(item)

            console.log(countWrongAnswer)
        }
        restart()
    }
    incorrectGuess()
    if (countWrongAnswer >= 6) {
        lossDisplay.style.display = visible
    }
})
let countWrongAnswer = 0

function updateUserScore() {
    // get current user to update the score
    let user = JSON.parse(localStorage.getItem('CurrentUser'));
    user.score = calculateRemainingTries();
    console.log(user);
    localStorage.setItem('CurrentUser', JSON.stringify(user));
    return user;
}


// möjligtvis en fungerande funktion för att mäta poäng i spelet
function calculateRemainingTries() {
<<<<<<< HEAD
    return 6 - countWrongAnswer;
=======
    console.log(countWrongAnswer);
    return 5 - countWrongAnswer;
>>>>>>> 1b024d35b12f790a56b6a717e819270f13889eb7
}

let remainingTries = calculateRemainingTries();
console.log("Remaining tries: ", remainingTries);


export { calculateRemainingTries }