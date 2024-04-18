'use strict';

const listWithElemSize = Array.from(document.querySelectorAll('.font-size'));
const bookContent = document.querySelector('.book');

const listWithElemColor = Array.from(document.querySelectorAll('.book__control_color .color'));

const listWithElemBackground = Array.from(document.querySelectorAll('.book__control_background .color'));

function changeSizeText(listWithElemSize) {
    listWithElemSize.forEach(elem => {
        elem.addEventListener('click', (event) => {
            event.preventDefault();
            listWithElemSize.forEach(elem => {
                elem.classList.remove('font-size_active');
            })
            elem.classList.add('font-size_active');

            if (elem.classList.contains('font-size_small')) {
                bookContent.classList.add('book_fs-small');
                bookContent.classList.remove('book_fs-big');
            } else if (elem.classList.contains('font-size_big')) {
                bookContent.classList.add('book_fs-big');
                bookContent.classList.remove('book_fs-small');
            } else {
                bookContent.classList.remove('book_fs-small');
                bookContent.classList.remove('book_fs-big');
            }
        }
        )
    }
    )
}

changeSizeText(listWithElemSize);

function changeColorText(listWithElemColor) {
    listWithElemColor.forEach(elem => {
        elem.addEventListener('click', (event) => {
            event.preventDefault();
            listWithElemColor.forEach(elem => {
                elem.classList.remove('color_active');
            })
            elem.classList.add('color_active');

            if (elem.classList.contains('text_color_black')) {
                bookContent.classList.add('book_color-black');
                bookContent.classList.remove('book_color-whitesmoke');
                bookContent.classList.remove('book_color-gray');
            } else if (elem.classList.contains('text_color_gray')) {
                bookContent.classList.add('book_color-gray');
                bookContent.classList.remove('book_color-whitesmoke');
                bookContent.classList.remove('book_color-black');
            } else if (elem.classList.contains('text_color_whitesmoke')) {
                bookContent.classList.add('book_color-whitesmoke');
                bookContent.classList.remove('book_color-gray');
                bookContent.classList.remove('book_color-black');
            }
        })
    })
}

changeColorText(listWithElemColor);

function changeBackground(listWithElemBackground) {
    listWithElemBackground.forEach(elem => {
        elem.addEventListener('click', (event) => {
            event.preventDefault();
            listWithElemBackground.forEach(elem => {
                elem.classList.remove('color_active');
            })
            elem.classList.add('color_active');

            if (elem.classList.contains('bg_color_black')) {
                bookContent.classList.add('book_bg-black');
                bookContent.classList.remove('book_bg-white');
                bookContent.classList.remove('book_bg-gray');
            } else if (elem.classList.contains('bg_color_gray')) {
                bookContent.classList.add('book_bg-gray');
                bookContent.classList.remove('book_bg-white');
                bookContent.classList.remove('book_bg-black');
            } else if (elem.classList.contains('bg_color_white')) {
                bookContent.classList.add('book_bg-white');
                bookContent.classList.remove('book_bg-gray');
                bookContent.classList.remove('book_bg-black');
            }
        })
    })
}

changeBackground(listWithElemBackground);