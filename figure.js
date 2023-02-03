import { randomize } from "./functions.js"

let correct = document.querySelector('.correct_letters')
let main = document.querySelector('body')

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

let randomWord = randomize()

// Create underline
for (let lines = 0; lines <= randomWord.length; lines++) {

	const underLine = document.createElement('div')
	underLine.style.width = "4em";
	underLine.style.height = "0.3em";
	underLine.style.background = "#000000";
	underLine.style.margin = "1em";
	underLine.style.display = "inline-block";

	correct.append(underLine)
}

console.log(randomWord)
main.addEventListener('keyup', event => {
	console.log('Key down: ', event.key)

	let rightLetter = randomWord.toLowerCase().split('').filter(rightElement => rightElement = event.key)
	let wrongLetter = randomWord.toLowerCase().split('').filter(wrongElement => wrongElement != event.key)

	rightLetter.forEach(rightElement => {

		if(rightElement == event.key){
			console.log('true');
		}
	})
	wrongLetter.forEach(wrongElement => {
		
		if(wrongElement != event.key){
			console.log('nope')
		}
	})
})



