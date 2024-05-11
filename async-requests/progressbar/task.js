'use strict';

const progress = document.getElementById('progress');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.onprogress = function (event) {
        if (event.lengthComputable) {
            const partOfProgress = (event.loaded / event.total) * 100;
            progress.value = partOfProgress;
        }
    }

    xhr.onload = function () {
        if (xhr.readyState === xhr.DONE) {
            if (xhr.status >= 400) {
                alert(`Ошибка загрузки данных( ${this.status}`);
            }

            if (xhr.status === 200) {
                console.log('Успешная загрузка данных)');
            }
        }
    }

    xhr.send(new FormData(form));
})