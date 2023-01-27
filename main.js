'use strict'

document.onselectstart = noselect;
document.ondragstart = noselect;
document.oncontextmenu = noselect;
function noselect() {
    return false;
};

let el = document.getElementsByClassName('list_numbers');

function ListNumbers(el) {

    for(let i = 0; i < el.length; i++) {
        el[i].textContent = i + 1;
    }
    
};

ListNumbers(el);

function getDate() {
    let date = new Date();

    document.getElementById('date').textContent = 'от ' +
    date.getDate() + '.' + date.getMonth() + 1 + '.' + date.getFullYear();
};

getDate();

