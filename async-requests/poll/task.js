'use strict';

const pollAnswers = document.querySelectorAll('.poll__answers');

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');

xhr.onload = function () {
    if (xhr.readyState === xhr.DONE) {
        if (xhr.status >= 400) {
            alert(alert(`Ошибка загрузки данных( ${this.status}`));
        }

        if (xhr.status === 200) {
            console.log('Успешная загрузка данных)');

            const responseServer = JSON.parse(xhr.responseText);

            console.log(responseServer.data.answers);

            createComponentPoll(responseServer.data.title, responseServer.data.answers);

            pollAnswers.forEach(btn => {
                btn.addEventListener('click', () => {
                    alert('Спасибо, ваш голос засчитан!')
                })
            })


        }
    }
}

xhr.send();

const createComponentPoll = (title, answersBtn) => {
    const pollTitle = document.querySelector('.poll__title');
    const pollAnswers = document.querySelector('.poll__answers');
    pollTitle.textContent = title;
    answersBtn.forEach(btn => {
        const btnAnswer = document.createElement('button');
        btnAnswer.classList.add('poll__answer');
        btnAnswer.textContent = btn;
        pollAnswers.appendChild(btnAnswer);
    });
}