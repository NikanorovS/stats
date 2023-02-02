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
import passwordCheck from "./passcheck.js";

window.onload = passwordCheck;
/*
function tableSearch() {
    
    var phrase = document.getElementById('search-text');
    var table = document.getElementById('info-table');
    var regPhrase = new RegExp(phrase.value, 'i');
    var flag = false;
    let neighbor = null;
    for (var i = 0; i < table.rows.length; i++) {
        flag = false;
        for (var j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            
            if (flag) break;
            
        }
        if (flag) {
            table.rows[i].style.display = "";          
                       
        } else {
            table.rows[i].style.display = "none";
        }

    }
}
document.getElementById('search-text').addEventListener('keyup', tableSearch);
*/
