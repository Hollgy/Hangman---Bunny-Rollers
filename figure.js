import { wordArray } from "./word-list.js";

const playAgainBtn = document.getElementById('play-button');
const popup = document.getElementById('popup-container');
const finalMessage = document.getElementById('final-message');
let correct = document.querySelector('.correct_letters')
let main = document.querySelector('body')
let correctAnswers = document.querySelector('#correctAnswers')
let correctList = document.querySelector('#correctList')
let wrongList = document.querySelector('#wrongList')
let scorebtn = document.getElementById("scorebtn");
let scoreboard = document.querySelector(".scoreboard");
let username = document.getElementById("username");
let submit = document.getElementById("submit");
let userPopup = document.querySelector('#use')
let reset = document.querySelector('#reset')
let sortWin = document.querySelector('#sort-win-loss')
let sortScore = document.querySelector('#sort-score')

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
                finalMessage.innerText = `Congratulations! You won and only guessed \n wrong ${wrongLetters.length} times!`;
                popup.style.display = 'flex';

                const victory = true

                let finalScore = countCorrect
                let obj = {
                    name: username.value,
                    score: finalScore,
                    result: victory
                }

                player.push(obj);
                localStorage.setItem("player", JSON.stringify(player))
               renderScore()
            }
        }

        //Display parts
        const drawing = [ground, scaffold, head, body, arms, legs]
        if (selectedWord.toLowerCase().includes(event.key) == false && onlyLetter.includes(event.key) == true && wrongLetters.includes(event.key) == false) {
            while(wrongLetters.length >= countWrongAnswer){
                drawing[countWrongAnswer].style.display = visible
                countWrongAnswer++
            }
            console.log('incorrect guess')
        }
    })
    let countWrongAnswer = 0
    
}
correctGuess()

// ----------------------------------- FELAKTIGA GISSNINGAR
function updateWrongLetterE1() {
    //Display wrong letters
    wrongList.innerHTML = wrongLetters.map(letter => letter.toUpperCase())
    wrongList.setAttribute('id', 'wrongLetter')

    //----------------------------------------------------------------------Check if lost
    if (wrongLetters.length === 6) {
        finalMessage.innerText = `Unfortunately you lost the secret word was.\n  "${selectedWord}"`
        popup.style.display = 'flex';

        const lose = false

        let finalScore = countCorrect
        let obj = {
            name: username.value,
            score: finalScore,
            result: lose
        }

        // ----------------------------------------------------------------------------push update of score and username to scoreboard
        player.push(obj);
        localStorage.setItem("player", JSON.stringify(player))
        renderScore()
    }
}

// -------------------------------------------------------SORT AV SCOREBOARD
let player = JSON.parse(localStorage.getItem("player")) || [];
let sortOrder = 1;
function isSortByAscending(){
    sortWin.addEventListener('click', () => {
        player.sort((a, b) => sortOrder * (a.result - b.result));
        sortOrder *= -1;
        console.log(player);
        renderScore()
    });
}
isSortByAscending()
// -------------------------------------------------------SORT AV SCOREBOARD
function isSortByScore(){
    sortScore.addEventListener('click', () => {
        player.sort((a, b) => sortOrder * (a.score - b.score));
        sortOrder *= -1;
        console.log(player);
        renderScore()
    });
}
isSortByScore()
//---------------------------------------------PUSH AV GISSADE BOKSTÄVER
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
//---------------------------------------------PUSH AV GISSADE BOKSTÄVER
// ----------------------------------------RESET KNAPP
reset.addEventListener('click', () => {
    window.localStorage.clear()
    location.reload()
})
// ----------------------------------------RESET KNAPP
//---------------------------------------Restart game and play again
playAgainBtn.addEventListener('click', () => {
    //Empty arrays
    location.reload()
});
//---------------------------------------Restart game and play again
//---------------------------------------toggle scorescreen.
scorebtn.addEventListener("click", function () {
    if (scoreboard.style.display === "none") {
        scoreboard.style.display = "block";
    } else {
        scoreboard.style.display = "none";
    }
});
//---------------------------------------toggle scorescreen.
//---------------------------------------toggle user-popup.
document.addEventListener("load", function () {
    if (userPopup.style.display == "none") {
        userPopup.style.display = "block";
    } else {
        userPopup.style.display = "none";
    }
});
//---------------------------------------toggle user-popup.
// --------------------------------------stoppar inputfield från att bubbla
username.addEventListener("keyup", function (stopBubble) {
    stopBubble.stopPropagation()
    console.log("input i field")
})
// --------------------------------------stoppar inputfield från att bubbla
// --------------------------------------------SUBMIT AV USERNAME OCH SCORE TILL SCOREBOARD
submit.addEventListener("click", function () {
    localStorage.setItem("player", JSON.stringify(player));
    renderScore()
});

function renderScore() {
    scoreboard.innerHTML = player.map(o => `Name:${o.name} Score:${o.score} Result:${booleanToWinLose(o.result)}`).join("<br>");
}

function booleanToWinLose(b){
    if(b == true){
        return 'victory'
    }
    else{
        return 'Defeat'
    }
}
renderScore()
// --------------------------------------------SUBMIT AV USERNAME OCH SCORE TILL SCOREBOARD
