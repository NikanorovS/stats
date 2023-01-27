'use strict'


let el = document.getElementsByClassName('list_numbers');

for(let i = 0; i < el.length; i++) {
    el[i].textContent = i + 1;
}
