'use strict'

document.onselectstart = noselect;
document.ondragstart = noselect;
document.oncontextmenu = noselect;

export default function noselect() {
    return false;
}