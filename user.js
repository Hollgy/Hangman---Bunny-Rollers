
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

const addUser = (ev)=>{
    ev.preventDefault()
    let user = {
        username: document.getElementById('userInput').value,
    }
    users.push(user);
    // visar en lista
    console.warn('added', {users} );
    // skapar en sträng av inputen, pushar detta till array och visas sedan i #msg
    let pre = document.querySelector('#msg pre');
    pre.textContent = '\n' + JSON.stringify(users, '\t', 2)

    // sparar lokalt
    localStorage.setItem('MyUserList', JSON.stringify(users));
    // if sats nedan kollar så value inte är null

}

document.addEventListener('DOMContentLoaded', () =>{
    document.getElementById('userBtn').addEventListener('click', addUser)
});
// ------------------------------------ 

// ------------------------------------
