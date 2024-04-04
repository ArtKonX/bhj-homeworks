'use strict';

let getHole = index => document.getElementById(`hole${index}`);
const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

let deadCounter = 0;
let lostCounter = 0;

for (let i = 1; i <= 9; i++){
    let hole = getHole(i);
    hole.addEventListener( 'click', function() {
        if (hole.classList.contains( 'hole_has-mole' )) {
            deadCounter++;
        } else {
            lostCounter++;
        }

        if (deadCounter === 10){
            deadCounter = 0;
            lostCounter = 0;
            alert('Вы победили! Поздравляем)');
        } else if (lostCounter === 5){
            deadCounter = 0;
            lostCounter = 0;
            alert('Вы проиграли(');
        }

        dead.textContent = deadCounter;
        lost.textContent = lostCounter;
    });
}
