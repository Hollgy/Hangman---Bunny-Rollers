import { wordArray } from "./word-list.js";

let restartButton = document.querySelector('#restart')
let userPopup = document.getElementById('#user-container')
let scorebtn = document.getElementById("scorebtn");
let scoreboard = document.querySelector(".scoreboard");
// Random words from list
function randomize() {
    const randomWords = wordArray
    let randomWord = randomWords[Math.floor(Math.random() * randomWords.length)]

    return randomWord;
}

// Restart button
function restart() {
    restartButton.addEventListener('click', () => {
        location.reload()
    })
}
//------------------------------------- toggle scorescreen.

function toggleScoreboard() {
    if (scoreboard.style.display === "none") {
        scoreboard.style.display = "block";
    } else {
        scoreboard.style.display = "none";
    }
}

scorebtn.addEventListener("click", toggleScoreboard);
// ------------------------------------------------------

// ------classlist variant nedanför---------
// scorebtn.addEventListener("click", function () {
//     scoreboard.classList.toggle("visible");
// });
//---------------------------------------toggle user-popup.
export function toggleUsername() {
    if (userPopup.style.display === "none") {
        userPopup.style.display = "block";
    } else {
        userPopup.style.display = "none";
    }
}
window.addEventListener("load", toggleUsername)

export { toggleScoreboard }
export { restart }
export { randomize }
