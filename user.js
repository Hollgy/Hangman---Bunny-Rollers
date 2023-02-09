import { calculateRemainingTries } from "./figure.js";
// DOMS
const textContainer = document.querySelector('.text-container')
const userInput = document.querySelector('.user-input')
const uInput = document.getElementById('userInput')
// const uContainer = document.getElementById('.user-container')
const scoreOverlay = document.querySelector('.overlay')
const scoreButton = document.querySelector('.open-score')
const arrayDisplay = document.getElementById('#msg')
const head = document.querySelector('header')
const invisible = 'none';
const visible = 'block';

// ------------------------------------
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
// ------------------------------------
// stoppar input i username fältet att räknas som gissning
head.addEventListener("keyup", function (h) {
    h.stopPropagation()
    console.log("input i field")
})
// ------------------------------------
// local storage nedanför

let users = [];
let score = calculateRemainingTries()
const addUser = (ev) => {
    ev.preventDefault()
    let user = {
        username: document.getElementById('userInput').value,
        score: score
    }
    users.push(user);

    // Build the string to be displayed in the #msg element
    let pre = document.querySelector('#msg pre');
    let content = "";
    for (let i = 0; i < users.length; i++) {
        let username = users[i].username;
        let score = users[i].score;
        content += `Username: ${username}\nScore: ${score}.\n`;
    }
    pre.textContent = content;

    // Save to local storage
    localStorage.setItem('MyUserList', JSON.stringify(users));
    localStorage.setItem('CurrentUser', JSON.stringify(user));
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('userBtn').addEventListener('click', addUser)
});

// ------------------------------------ 

// ------------------------------------
