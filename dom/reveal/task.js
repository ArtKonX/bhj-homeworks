'use strict';

const listReveal = Array.from(document.querySelectorAll('.reveal'));

const getBoolVisible = (elem) => {
    const viewHeight = window.innerHeight;
    const elemTop = elem.getBoundingClientRect().top;
    const elemBottom = elem.getBoundingClientRect().bottom;
    return (elemTop < viewHeight) && (elemBottom > 0) ? true : false;
};

document.addEventListener('scroll', () => {
    listReveal.forEach(elem => {
        getBoolVisible(elem) ? elem.classList.add('reveal_active') : elem.classList.remove('reveal_active');
    });
});