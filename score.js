document.getElementById("btnToggle").onclick = toggleVisibility;
function toggleVisibility() {
    let screen = document.getElementById("Screen");
    if (screen.style.display == "none") {
        screen.style.display = "block";
    } else {
        screen.style.display = "none";
    }
}

let gissningar = 0;
input = ''
while (gissningar = 5) {
    console.log("gissa igen");
    gissningar++;
    if (input = randomWords)
}

const hiddenWord = "randomWords";
let maxGuesses = 5;
let remainningGuesses = maxGuesses;
let correctGuesses [];

while (remainningGuesses > 0) {
    const guess = prompt('Guess again')
    if (hiddenWord.includes(guess)) {
        correctGuesses.push(guess);
        console.log('correct!')
        if (correctGuesses.length === hiddenWord.length) {
            console.log('You have guessed the entire word correctly')
            break;

        }
    }else {
        remainningGuesses--;
        console.log(`incorrect.`)
        if(remainningGuesses === 0 ){
            console.log(`tough shit pal`)
        }
    }
}