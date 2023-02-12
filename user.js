import { calculateRemainingTries, updateUserScore } from "./figure.js";
// DOMS
const textContainer = document.querySelector('.text-container')
const userInput = document.querySelector('.user-input')
const uInput = document.getElementById('userInput')
// const uContainer = document.getElementById('.user-container')
const scoreOverlay = document.querySelector('.overlay')
const scoreButton = document.querySelector('.open-score')
const arrayDisplay = document.getElementById('#msg')
const invisible = 'none';
const visible = 'block';

// ------------------------------------
// let isVisible = false;
// scoreOverlay.style.display = invisible;
// scoreButton.addEventListener('click', () => {
//     if (!isVisible) {
//         updateScoreBoardUI();
//         scoreOverlay.style.display = visible;
//         isVisible = true;
//     } else {
//         scoreOverlay.style.display = invisible;
//         isVisible = false;
//     }
// });
// ------------------------------------
// stoppar input i username fältet att räknas som gissning
// uInput.addEventListener("keyup", function (h) {
//     h.stopPropagation()
//     console.log("input i field")
// })
// ------------------------------------
// local storage nedanför

// let users = [];
// calculateRemainingTries()
// const addUser = (ev) => {
//     ev.preventDefault()
    
//     let user = {
//         username: document.getElementById('userInput').value,
//         score: 0 + calculateRemainingTries()
//     }
//     users.push(user);

//     updateScoreBoardUI();
//     localStorage.setItem('CurrentUser', JSON.stringify(user));
// }

// document.addEventListener('DOMContentLoaded', () => {
//     document.getElementById('userBtn').addEventListener('click', addUser)
// });

// function updateScoreBoardUI() {
//     // Build the string to be displayed in the #msg element
//     let pre = document.querySelector('#msg pre');
//     let content = "";
//     for (let i = 0; i < users.length; i++) {
//         let username = users[i].username;
//         let score = users[i].score;
//         content += `Username: ${username}\nScore: ${score}.\n`;
//     }
//     pre.textContent = content;
    
//     // Save to local storage
//     localStorage.setItem('MyUserList', JSON.stringify(users));
// }


// ------------------------------------ !! TODO
// Pusha   localStorage.setItem('CurrentUser', JSON.stringify(user));
//  till my user list istället för let username och let score.
// // ------------------------------------ !!
