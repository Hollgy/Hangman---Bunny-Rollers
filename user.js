
// DOMS
const textContainer = document.querySelector('.text-container')
const userInput = document.querySelector('.user-input')
const scoreButton = document.querySelector('.open-score')
const scoreOverlay = document.querySelector('.overlay')

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
