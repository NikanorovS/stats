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

