'use strict';

const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');

let flagClosedModal;

function closeModal() {
    modal.classList.remove('modal_active');
    document.cookie = 'closedModal=false';
    flagClosedModal = false;
}

function checkCloseModal() {
    if (getCookie('closedModal') === 'false') {
        closeModal();

    } else {
        modal.classList.add('modal_active');
        flagClosedModal = true;
    }
}

modalClose.addEventListener('click', closeModal);

function getCookie(closedModal) {
    const pairs = document.cookie.split('; ');
    const cookie = pairs.find(p => p.startsWith(`${closedModal}=`));
    return cookie ? cookie.split('=')[1] : 'true';
}

checkCloseModal();

function checkBoolClosedModal(flagClosedModal) {
    flagClosedModal ? document.cookie = 'closedModal=true' : document.cookie = 'closedModal=false';
}

checkBoolClosedModal(flagClosedModal);

// document.cookie =
//     "closedModal=false; expires=Fri, 31 Dec 1969 23:59:59 GMT";