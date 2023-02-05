import { randomize } from "./functions.js"

let correct = document.querySelector('.correct_letters')
let main = document.querySelector('body')
let wordHolder = document.querySelector('#hold')
let word = document.querySelector('#choosenWord')
let wrongAnswers = document.querySelector('#wrongAnswers')
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
		correct.setAttribute('id', 'my-word');
		guess = document.createElement('li');
		guess.setAttribute('class', 'guess');
		guess.innerHTML = "_";

		geusses.push(guess);
		wordHolder.append(word);
		word.append(guess);
	}
}
result()

// Create wrong answer ul
let wrongGeusses = [];
let wrongGuess

function wrongUl() {
	for (let i = 0; i <= 6; i++) {
		correct.setAttribute('id', 'my-word');
		wrongGuess = document.createElement('li');
		wrongGuess.setAttribute('class', 'wrongGuess');
		wrongGuess.innerHTML = "";

		wrongGeusses.push(wrongGuess);
		wrongAnswers.append(wrongList);
		wrongList.append(wrongGuess);
	}
}
wrongUl()

// Guess letter
	console.log(shuffle)
	main.addEventListener('keyup', event => {
		console.log('Key down: ', event.key)
	
		for(let x = 0; x < shuffle.length; x++){
			if(shuffle[x].toLowerCase() === event.key) {
				console.log('true')
				geusses[x].innerHTML = event.key.toLocaleUpperCase()
			}
			else {
				console.log('false')
				wrongGeusses[x].innerHTML = event.key.toLocaleUpperCase()
			}
		}			
	
		
	})
