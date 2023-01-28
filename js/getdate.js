'use strict'

export default function getDate() {
    let date = new Date();

    document.getElementById('date').textContent = 'от ' +
    date.getDate() + '.' + date.getMonth() + 1 + '.' + date.getFullYear();
}