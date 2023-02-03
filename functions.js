import { countrysArray } from "./Country.js"

// Random words from list
function randomize(){
	const randomWords = countrysArray
	let randomWord = randomWords[Math.floor(Math.random() * randomWords.length)]
	
	return randomWord;
	}
	
export {randomize}
