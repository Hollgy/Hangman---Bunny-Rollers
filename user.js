
// DOMS
const textContainer = document.querySelector('.text-container')
const userInput = document.querySelector('.user-input')
// const uInput = document.getElementById('userInput')
// const uContainer = document.getElementById('.user-container')
const scoreOverlay = document.querySelector('.overlay')
const scoreButton = document.querySelector('.open-score')
const head = document.querySelector('header')

// VARIABLER
const invisible = 'none';
const visible = 'block';

let isVisible = false;

scoreOverlay.style.display = invisible;
scoreButton.addEventListener('click', () => {
    if (!isVisible) {
        scoreOverlay.style.display = visible;
        isVisible = true;
    } else {
        scoreOverlay.style.display = invisible;
        isVisible = false;
    }
});

// stoppar input i username fältet att räknas som gissning
head.addEventListener("keyup", function (h) {
    h.stopPropagation()
    console.log("Knapptryck")
})




