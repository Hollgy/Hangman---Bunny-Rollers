import { randomize, restart } from "./functions.js"

let correct = document.querySelector('.correct_letters')
let incorrect = document.querySelector('.wrong_letters')
let main = document.querySelector('body')
let correctAnswers = document.querySelector('#correctAnswers')
let correctList = document.querySelector('#correctList')
let wrongList = document.querySelector('#wrongList')

let hangman = {
	scaffold: document.querySelector('#scaffold'),
	legs: document.querySelector('#legs'),
	arms: document.querySelector('#arms'),
	body: document.querySelector('#body'),
	head: document.querySelector('#head')
}

const scaffold = hangman.scaffold
const head = hangman.head
const body = hangman.body
const arms = hangman.arms
const legs = hangman.legs
const invisible = 'none'
const visible = 'block'

scaffold.style.display = invisible
head.style.display = invisible
body.style.display = invisible
arms.style.display = invisible
legs.style.display = invisible

let shuffle = randomize()

// Create geusses ul
let geusses = [];
let guess
function result() {
	for (let i = 0; i < shuffle.length; i++) {
		correct.setAttribute('id', 'word');
		guess = document.createElement('li');
		guess.setAttribute('class', 'guess');
		guess.innerHTML = "_";

		geusses.push(guess);
		correctAnswers.append(correctList);
		correctList.append(guess);
		restart()
	}
}

result()

// Guess letter
console.log(shuffle)
main.addEventListener('keyup', event => {
	console.log('Key down: ', event.key)
	function correctGuess() {
		for (let x = 0; x < shuffle.length; x++) {
			if (shuffle[x].toLowerCase() === event.key) {
				console.log('Correct guess')
				geusses[x].innerHTML = event.key.toUpperCase()
			}
		}
	}
	correctGuess()

	// Draw when the guess is wrong
	function incorrectGuess() {
		const drawing = [scaffold, head, body, arms, legs]

		if (shuffle.toLowerCase().includes(event.key) == false) {
			drawing[countWrongAnswer].style.display = visible
			countWrongAnswer++
			console.log('incorrect guess')
		}
		restart()
	}
	incorrectGuess()
})
let countWrongAnswer = 0

// Creates a list with wrong letters
main.addEventListener('keyup', (event) => {
	incorrect.setAttribute('id', 'word')
	const item = document.createElement('li')
	item.setAttribute('class', 'wrongGuess')
	item.textContent = event.key.toUpperCase()
	wrongList.append(item)
	restart() 
})