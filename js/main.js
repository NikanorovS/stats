'use strict'
/**Защита копирования */ 
import noselect from "./noselection.js";

noselect();

/**Автоматическая нумерация */
import ListNumbers from "./listnumbers.js";
import { el } from "./listnumbers.js";

ListNumbers(el);

/**Автоматическая дата на странице */
import getDate from "./getdate.js";

getDate();

/**Пароль */

function passwordCheck() {
    let pass = prompt("Enter password",'');
    if (pass === '0000') {
        document.body.style.display = 'block';
        return true
    } else {
        alert('Password incorrect!')
        document.body.style.display = 'none';
        return false
    }
}

window.onload = passwordCheck;