'use strict'

export default function passwordCheck() {
    let pass = prompt("Enter password",'');
    if (pass === '1989') {
        document.body.style.display = 'block';
        return true
    } else {
        alert('Password incorrect!')
        document.body.style.display = 'none';
        return false
    }
}

