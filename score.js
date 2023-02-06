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

// Hämtar data och parse'ar' tillbaka till en array
let storedData = JSON.parse(localStorage.getItem('correctGuesses')) || [];

// trycker in värdena i overlay i en ul
let overlay = document.querySelector('.overlay');
let list = document.createElement('ul');

//loopar varje värde till li element och appendar dom
for (let i = 0; i < storedData.length; i++) {
let item = document.createElement('li');
item.textContent = storedData[i];
list.appendChild(item);
}

overlay.appendChild(list);