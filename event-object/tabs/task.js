'use strict';

const tab = Array.from(document.querySelectorAll('div.tab'));
const tabContent = Array.from(document.querySelectorAll('div.tab__content'));
let indexElem = 0;

function activateTabAndContent(index) {

    document.querySelector('div.tab_active').classList.remove('tab_active');
    document.querySelector('div.tab__content_active').classList.remove('tab__content_active');

    tab[index].classList.add('tab_active');
    tabContent[index].classList.add('tab__content_active');

};

function switchingTab(event) {
    if (event.key == 'ArrowRight') {
        indexElem == tab.length -1 ? indexElem = 0 : indexElem++;
    } else if (event.key == 'ArrowLeft') {
        indexElem == 0 ? indexElem = tab.length -1 : indexElem--;
    }
};

tab.forEach((item, index) => {
    item.addEventListener('click', () => {
        activateTabAndContent(index);
        indexElem = index;
    })
});

document.addEventListener('keydown', (event) => {
    switchingTab(event);
    activateTabAndContent(indexElem);
});
