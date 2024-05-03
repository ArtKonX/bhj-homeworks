'use strict';

const listLinks = Array.from(document.querySelectorAll('.has-tooltip'));

listLinks.forEach((elem) => {
    elem.addEventListener('click', function (e) {
        e.preventDefault();

        const tooltip = document.createElement('div');
        tooltip.classList.add('tooltip');
        tooltip.textContent = elem.getAttribute('title');
        tooltip.classList.add('tooltip_active');

        const tooltipActive = document.querySelector('.tooltip_active');

        if (tooltipActive) {
            tooltipActive.remove();
            return;
        }

        const listTooltipActive = Array.from(document.querySelectorAll('.tooltip'));

        if (listTooltipActive.length >= 1) {
            listTooltipActive[0].remove();
        }

        const coordinates = elem.getBoundingClientRect();
        const coordinatesLeft = coordinates.left;
        const coordinatesTop = coordinates.top + coordinates.height;

        tooltip.style.left = coordinatesLeft + 'px';
        tooltip.style.top = coordinatesTop + 'px';

        document.addEventListener('scroll', function () {
            tooltip.style.top = coordinatesTop - window.scrollY + 'px';
        });
        elem.insertAdjacentElement('afterEnd', tooltip);

    })
})
