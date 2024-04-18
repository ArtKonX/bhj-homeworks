'use strict';

const listFromRotatorCase = Array.from(document.querySelectorAll('.rotator__case'));
const rotator = document.querySelector('.rotator');

let countAd = 0;

const funcRotation = () => {

    listFromRotatorCase.forEach(elem => {
        elem.classList.remove('rotator__case_active');
    });
    countAd = (countAd + 1) % listFromRotatorCase.length;
    const nextAd = listFromRotatorCase[countAd];
    nextAd.classList.add('rotator__case_active');

    const colorElem = nextAd.dataset.color;
    nextAd.style.color = colorElem;

    const speedElem = nextAd.dataset.speed;
    const timeInterval = speedElem ? parseInt(speedElem) : 1000;

    clearInterval(listFromRotatorCase.interval);
    listFromRotatorCase.interval = setInterval(funcRotation, timeInterval);
}

funcRotation();