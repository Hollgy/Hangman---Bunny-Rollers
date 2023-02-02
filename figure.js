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


