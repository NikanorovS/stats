'use strict'

export default function getDate() {
    let date = new Date();

    document.getElementById('date').textContent = 'от ' +
    String(date.getDate()).padStart(2, '0') + '.' + String(date.getMonth() + 1).padStart(2, '0') + '.' + date.getFullYear();
}