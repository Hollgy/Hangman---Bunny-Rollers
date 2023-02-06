import { countrysArray } from "./Country.js"

let restartButton = document.querySelector('#restart')


// Random words from list
function randomize() {
	const randomWords = countrysArray
	let randomWord = randomWords[Math.floor(Math.random() * randomWords.length)]

	return randomWord;
}

// Restart button
function restart () {
restartButton.addEventListener('click', () => {
	document.location.reload()
})
}
restart()



export { randomize }
