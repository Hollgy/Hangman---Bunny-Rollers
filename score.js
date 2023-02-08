// document.getElementById("btnToggle").onclick = toggleVisibility;
// function toggleVisibility() {
//     let screen = document.getElementById("Screen");
//     if (screen.style.display == "none") {
//         screen.style.display = "block";
//     } else {
//         screen.style.display = "none";
//     }
// }
//troligtvis skräp ovan, återkomm och kolla senare / kg
let gissningar = 0;
input = ''
while (gissningar < 6) {
    console.log("gissa igen");
    gissningar++;
    if (input === randomWords)
}

const hiddenWord = "randomWords";
let maxGuesses = 5;
let remainningGuesses = maxGuesses;
let correctGuesses = [];

while (remainningGuesses > 0) {
    const guess = prompt('Guess again')
    if (hiddenWord.includes(guess)) {
        correctGuesses.push(guess);
        console.log('correct!')
        if (correctGuesses.length === hiddenWord.length) {
            console.log('You have guessed the entire word correctly')
            break;
            localStorage.setItem("correctGuesses", JSON.stringify(correctGuesses))
        }
    } else {
        remainningGuesses--;
        console.log(`incorrect.`)
        if (remainningGuesses === 0) {
            console.log(`tough shit pal`)
        }
    }
}

// Local storage som pushar correctGuesses till listform och kör in dom i .overlay elementet i footern

//sparar antal gissningar till en sträng och förvarar den i localStorage


localStorage.setItem("correctGuesses", JSON.stringify(guesses))

let storedData = JSON.parse(localStorage.getItem('correctGuesses')) || [];

// väljer elementet overlay 
let overlay = document.querySelector('.overlay');
let list = document.createElement('ul');

// parse'ar in correctGuesses som list element och appendar
for (let i = 0; i < storedData.length; i++) {
let item = document.createElement('li');
item.textContent = storedData[i];
list.appendChild(item);
}

overlay.appendChild(list);