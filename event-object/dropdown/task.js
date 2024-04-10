'use strict';

const dropDownValue = document.getElementsByClassName('dropdown__value');
const dropDownLink = Array.from(document.getElementsByClassName('dropdown__link'));
const dropDownList = document.getElementsByClassName('dropdown__list');

const openCloseList = () => {
    dropDownList[0].className === "dropdown__list" ? dropDownList[0].className = "dropdown__list dropdown__list_active" : dropDownList[0].className = "dropdown__list";
};

function clickValue(event) {
    dropDownValue[0].textContent = this.textContent;
    event.preventDefault();
    openCloseList();
};

dropDownValue[0].addEventListener('click', openCloseList);

dropDownLink.forEach(element => {
    element.addEventListener('click', clickValue);
});