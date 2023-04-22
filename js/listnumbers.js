'use strict'

let el = document.getElementsByClassName('list_numbers');


export default function ListNumbers(el) {

    for(let i = 0; i < el.length; i++) {
        el[i].textContent = i + 1;
    }
};

export {el}