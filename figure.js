import { countrysArray } from "./Country.js"

let correct = document.querySelector('.correct_letters')
let test = document.querySelector('body')

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
	underLine.style.background = "#000000";
	underLine.style.margin = "2em";
	underLine.style.display = "inline-block";
	
	correct.append(underLine)
}
// const letter = [a-z,A-Z]
let letter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','å','ä','ö'];

test.addEventListener('keydown', event => {
	console.log('Key down: ', event.key, event.target.value)
})

// test.addEventListener('keyup', () => {
// 	if(randomWord = letter){
// 		console.log(`yes`)
// 	}
// 	else{
// 		console.log(`no`)
// 	}
// })

