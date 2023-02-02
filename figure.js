import { countrysArray } from "./Country.js"

let correct = document.querySelector('.correct_letters')

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
const legs= hangman.legs
const invisible = 'none'

scaffold.style.display = invisible
head.style.display = invisible
body.style.display = invisible
arms.style.display = invisible
legs.style.display = invisible

// Random words from list
const randomWords = countrysArray
let randomWord = randomWords[Math.floor(Math.random() * randomWords.length)]
console.log(randomWord)

// Create underline
for(let lines = 0; lines <= randomWord.length; lines++){

	const underLine = document.createElement('div')
	underLine.style.width = "4em";
	underLine.style.height = "0.3em";
	underLine.style.background = "black";
	underLine.style.margin = "2em";
	underLine.style.display = "inline-block";
	
	correct.append(underLine)
}