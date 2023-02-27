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
            console.log(flag)
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
/*
function tableSearch() {
    // Объявить переменные
    var input, filter, table, tr, th, i, txtValue;
    input = document.getElementById("search-text");
    filter = input.value.toUpperCase();
    table = document.getElementById("info-table");
    tr = table.getElementsByTagName("tr");
  
    // Перебирайте все строки таблицы и скрывайте тех, кто не соответствует поисковому запросу
    for (i = 0; i < tr.length; i++) {
      th = tr[i].getElementsByTagName("th")[1];
      if (th) {
        txtValue = th.textContent || th.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          
          tr[i].style.display = "";
        } else {
          
          tr[i].style.display = "none";
          
        }
      }
      
    }
  }
  document.getElementById('search-text').addEventListener('keyup', tableSearch);
  */