import { wordArray } from "./word-list.js";

const playAgainBtn = document.getElementById('play-button');
const popup = document.getElementById('popup-container');
const finalMessage = document.getElementById('final-message');
const words = ['application', 'programming', 'interface', 'wizard'];
let correct = document.querySelector('.correct_letters')
let incorrect = document.querySelector('.wrong_letters')
let main = document.querySelector('body')
let correctAnswers = document.querySelector('#correctAnswers')
let correctList = document.querySelector('#correctList')
let wrongList = document.querySelector('#wrongList')
// let lossDisplay = document.querySelector('.hung-screen')
// let winDisplay = document.querySelector('.win-screen')
let scorebtn = document.getElementById("scorebtn");
let scoreboard = document.querySelector(".scoreboard");
let username = document.getElementById("username");
let submit = document.getElementById("submit");


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

ground.style.display = invisible
scaffold.style.display = invisible
head.style.display = invisible
body.style.display = invisible
arms.style.display = invisible
legs.style.display = invisible


const onlyLetter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'å', 'ä', 'ö'];

let selectedWord = wordArray[Math.floor(Math.random() * wordArray.length)];

const correctLetters = [];
const wrongLetters = [];
let guesses = [];
let guess

console.log(selectedWord)
//Show hidden word
function result() {
    for (let i = 0; i < selectedWord.length; i++) {
        correct.setAttribute('id', 'word');
        guess = document.createElement('li');
        guess.setAttribute('class', 'guess');
        guess.innerHTML = "_";

        correctLetters.push(guess);
        correctAnswers.append(correctList);
        correctList.append(guess);
    }
}
result()
// ------------------------------- KORREKTA GISSNINGAR
let countCorrect = 0
function correctGuess() {
    main.addEventListener('keyup', event => {
        console.log('Key down: ', event.key)
        for (let x = 0; x < selectedWord.length; x++) {
            if (selectedWord[x].toLowerCase() === event.key) {
                console.log(correctLetters);
                console.log('Correct guess')
                correctLetters[x].innerHTML = event.key.toUpperCase()
                countCorrect++
                console.log(countCorrect);
                correctLetters[x] = false
            }
            if (countCorrect === selectedWord.length) {
                finalMessage.innerText = 'Congratulations! You won!';
                popup.style.display = 'flex';
            }
            // if (countCorrect === shuffle.length) {
            //     // uppdatera användarens poäng
            //     updateUserScore();
            //     winDisplay.style.display = visible
            // }
        }
    })
}
correctGuess()
// ----------------------------------- FELAKTIGA GISSNINGAR

// Update the wrong letters
function updateWrongLetterE1() {
    //Display wrong letters
    wrongList.innerHTML = wrongLetters.map(letter => letter.toUpperCase())
    wrongList.setAttribute('id', 'wrongLetter')

    //Display parts
    const drawing = [ground, scaffold, head, body, arms, legs]

    // Draw when the guess is wrong
    document.addEventListener('keyup', event => {
        if (selectedWord.toLowerCase().includes(event.key) == false && onlyLetter.includes(event.key) == true) {
            drawing[countWrongAnswer].style.display = visible
            countWrongAnswer++
            console.log('incorrect guess')
        }
    })
    let countWrongAnswer = 0

    //Check if lost
    if (wrongLetters.length === 6) {
        finalMessage.innerText = 'Unfortunately you lost.';
        popup.style.display = 'flex';
    }
}

// //Keyup letter press
window.addEventListener('keyup', event => {
    if (selectedWord.toLowerCase().includes(event.key) == false && onlyLetter.includes(event.key) == true) {
        const letter = event.key;

        if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
                correctLetters.push(letter);
            }
        } else {
            if (!wrongLetters.includes(letter)) {
                wrongLetters.push(letter);

                updateWrongLetterE1();
            }
        }
    }
});

//----------------------------------Restart game and play again
playAgainBtn.addEventListener('click', () => {
    //Empty arrays
    location.reload()
});




//------------------------------------- toggle scorescreen.
scorebtn.addEventListener("click", function () {
    if (scoreboard.style.display === "none") {
        scoreboard.style.display = "block";
    } else {
        scoreboard.style.display = "none";
    }
});
//---------------------------------------toggle user-popup.
scorebtn.addEventListener("click", function () {
    if (scoreboard.style.display === "none") {
        scoreboard.style.display = "block";
    } else {
        scoreboard.style.display = "none";
    }
});

// ------------------------------------stoppar inputfield från att bubbla
username.addEventListener("keyup", function (stopBubble) {
    stopBubble.stopPropagation()
    console.log("input i field")
})
// Local storage av <input id="username">
// Skapar en array i localstorage
scorebtn.addEventListener("click", function () {
    scoreboard.classList.toggle("visible");
});

// Local storage for <input id="username">
let scores = localStorage.getItem("scores");
if (!scores) {
    scores = [];
} else {
    scores = JSON.parse(scores);
}

submit.addEventListener("click", function () {
    // add the username value to the array
    scores.push(username.value);
    // store the new values in local storage using stringify
    localStorage.setItem("scores", JSON.stringify(scores));
    // display the local storage in .scoreboard
    scoreboard.innerHTML = scores.join("<br>");
});



// retrieve scores and display them in the scoreboard on page load
scoreboard.innerHTML = scores.join("<br>");
// ---------------------------------




