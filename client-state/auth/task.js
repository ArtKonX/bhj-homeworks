'use strict';

const userIdSpan = document.querySelector('#user_id')
const logOutBtn = document.querySelector('.log-out-btn');
const signin = document.querySelector('.signin');
const signinForm = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');

signinForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(signinForm);
    const xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.responseType = 'json';
    xhr.onload = function () {
        if (xhr.response.success) {
            const userId = xhr.response.user_id;
            localStorage.setItem('userId', userId)
            welcomeComponent(userId);
        } else {
            alert('Неверный логин/пароль');
        }
    }

    xhr.send(formData);
    signinForm.reset();

})

window.addEventListener('DOMContentLoaded', () => {
    const userId = localStorage.getItem('userId');
    if (userId) {
        welcomeComponent(userId);
    }

});

function welcomeComponent(userId) {
    signin.classList.remove('signin_active');
    welcome.classList.add('welcome_active');
    userIdSpan.textContent = userId;
}

logOutBtn.addEventListener('click', () => {
    logOut();
})

function logOut() {
    localStorage.removeItem('userId');
    signin.classList.add('signin_active');
    welcome.classList.remove('welcome_active');
}