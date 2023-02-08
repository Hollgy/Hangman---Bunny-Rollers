import { wordArray } from "./word-list.js";

let restartButton = document.querySelector('#restart')

// Random words from list
function randomize() {
	const randomWords = wordArray
	let randomWord = randomWords[Math.floor(Math.random() * randomWords.length)]

	return randomWord;
}

// Restart button
function restart(){
	restartButton.addEventListener('click', () => {
		location.reload()
	})
}

export { restart }
export { randomize }
