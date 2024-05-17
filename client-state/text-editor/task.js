'use strict';

const deleteBtn = document.querySelector('.delete-btn');
const editor = document.getElementById("editor");

const storageText = localStorage.getItem('text');

editor.addEventListener('input', () => {
    localStorage.setItem('text', editor.value);
});

if (storageText !== null) {
    editor.value = storageText;
}

deleteBtn.addEventListener('click', () => {
    editor.value = '';
    localStorage.removeItem('text');
});