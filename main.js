'use strict'

let el = document.getElementsByClassName('list_numbers');

function ListNumbers() {

    for(let i = 0; i < el.length; i++) {
        el[i].textContent = i + 1;
    }
    
};


ListNumbers();

let date = new Date();

document.getElementById('date').textContent = 
date.getDate() + '.' + date.getMonth() + 1 + '.' + date.getFullYear();