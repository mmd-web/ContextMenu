let $ = document;

let bodyElem = $.body;
let contextMenu = $.getElementById ("contextMenu"); 

function cont (event) {
    event.preventDefault ();
    if (contextMenu.style.display === "none") {
        saveValuePageX = event.pageX;
        saveValuePageY = event.pageY;
        contextMenu.style.left = event.pageX + "px";
        contextMenu.style.top = event.pageY + "px";
        contextMenu.style.display = "flex";
    }else {
        contextMenu.style.left = event.pageX + "px";
        contextMenu.style.top = event.pageY + "px";
    }
}

bodyElem.addEventListener ("contextmenu" , cont);

bodyElem.addEventListener ("keydown" , (event) => {
    if (event.key === "Escape") {
        contextMenu.style.display = "none";
    }
});

function clickOutmenu () {
    if (contextMenu.style.display != "none") {
        contextMenu.style.display = "none";
    }
}

bodyElem.addEventListener ("click" , clickOutmenu);

contextMenu.addEventListener ("mousemove" , () => {
    bodyElem.removeEventListener ("contextmenu" , cont);
    bodyElem.removeEventListener ("click" , clickOutmenu);
});

contextMenu.addEventListener ("mouseout" , () => {
    bodyElem.addEventListener ("contextmenu" , cont);
    bodyElem.addEventListener ("click" , clickOutmenu);
})