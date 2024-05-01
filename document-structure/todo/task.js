'use strict';

const tasksInput = document.querySelector('.tasks__input');
const listTask = document.querySelector('.tasks__list');

document.addEventListener('submit', (e) => {
    if (tasksInput.value) {
        listTask.innerHTML += `<div class="task">
        <div class="task__title">
          ${tasksInput.value}
        </div>
        <a href="#" class="task__remove">&times;</a>
      </div>`;
    }
    e.preventDefault();
    e.target.reset();
});

listTask.addEventListener('click', function (e) {
    const target = e.target;
    if (target.classList.contains('task__remove')) {
        const targetItem = target.closest('.task');
        targetItem.remove();
    }
});
