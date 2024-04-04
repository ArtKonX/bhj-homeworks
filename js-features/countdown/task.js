'use strict';

const statusElem = document.getElementById("status");
statusElem.style.marginRight = "-1px";

const timerElement = document.getElementById("timer");

const hidden = document.getElementById("hidden");

hidden.style.display = "none";

function formatTime(time) {
    return time < 10 ? `0${time}` : `${time}`;
}

function startTimer(durationInSeconds) {

    let timer = durationInSeconds;

    const nowSeconds = setInterval(() => {

        const hours = Math.floor(timer / 3600);
        const minutes = Math.floor((timer % 3600) / 60);
        const seconds = timer % 60;

        timerElement.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;

        if (timer >= 0) {
            --timer;
        } else {
            clearInterval(nowSeconds);

            timerElement.textContent = "00:00:00";
            alert("Вы победили в конкурсе!");

            hidden.click();
        }

    }, 1000);
}

startTimer(15919);