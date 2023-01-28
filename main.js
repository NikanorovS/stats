'use strict'
/**Защита копирования */ 
document.onselectstart = noselect;
document.ondragstart = noselect;
document.oncontextmenu = noselect;
function noselect() {
    return false;
};
/**Автоматическая нумерация */
import ListNumbers from "./listnumbers.js";
import { el } from "./listnumbers.js";

ListNumbers(el)

/**Автоматическая дата на странице */
import getDate from "./getdate.js";

getDate();

