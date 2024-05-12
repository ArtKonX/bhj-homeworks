'use strict';

const items = document.getElementById('items');
const loader = document.getElementById('loader');

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');

xhr.onload = function () {
    if (xhr.readyState === xhr.DONE) {
        if (xhr.status >= 400) {
            alert(alert(`Ошибка загрузки данных( ${this.status}`));
        }

        if (xhr.status === 200) {
            console.log('Успешная загрузка данных)');
            const responseServer = JSON.parse(xhr.responseText);
            console.log(responseServer);

            const allValutes = responseServer.response.Valute;

            for (const valute in allValutes) {
                const valueValute = Number(allValutes[valute].Value).toFixed(4);
                const newItem = createHTMLTemplate(valute, valueValute);
                items.appendChild(newItem);
            }

            loader.classList.remove('loader_active');
        }
    }
}

xhr.send();

function createHTMLTemplate(itemCode, itemValue) {
    const item = document.createElement('div');
    item.classList.add('item');

    item.innerHTML += `
        <div class="item__code">${itemCode}</div>
        <div class="item__value">${itemValue}</div>
        <div class="item__currency">руб.</div>
  `

    return item;
}