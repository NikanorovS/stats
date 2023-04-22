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


let scrollToTop = document.getElementById("scroll-to-top");

window.addEventListener("scroll", function() {
    if (window.pageYOffset > 100) {
        scrollToTop.style.display = "block";
    } else {
        scrollToTop.style.display = "none";
    }
});

scrollToTop.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
