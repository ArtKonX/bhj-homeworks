'use strict';

const cookie = document.getElementById("cookie");
const clickerCounter = document.getElementById("clicker__counter");
const clickerSpeed = document.getElementById("clicker__speed");

let startTime = Date.now();

cookie.onclick = () => [clickerCounter.textContent++, scaleCookie(), clickSpeedFunc()];

function scaleCookie () {
    clickerCounter.textContent % 2 !== 0 ? cookie.style.width = "230px" : cookie.style.width = "200px"
}

function clickSpeedFunc() {
    let pastTime = (Date.now() - startTime) / 1000;
    let clickSpeed = clickerCounter.textContent / pastTime;
    clickerSpeed.textContent = clickSpeed.toFixed(2);
}