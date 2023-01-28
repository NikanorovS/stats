'use strict'
/**Защита копирования */ 
document.onselectstart = noselect;
document.ondragstart = noselect;
document.oncontextmenu = noselect;
function noselect() {
    return false;
};
/**Автоматическая нумерация */
let el = document.getElementsByClassName('list_numbers');

'use strict'
function ListNumbers(el) {

    for(let i = 0; i < el.length; i++) {
        el[i].textContent = i + 1;
    }
    
};

ListNumbers(el);
/**Автоматическая дата на странице */
import getDate from "./getdate.js";

getDate();

