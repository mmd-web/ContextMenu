let $ = document;

let bodyElem = $.body;
let contextMenu = $.getElementById ("contextMenu"); 

bodyElem.addEventListener ("contextmenu" , (event) => {
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
});

bodyElem.addEventListener ("keydown" , (event) => {
    if (event.key === "Escape") {
        contextMenu.style.display = "none";
    }
});

bodyElem.addEventListener ("click" , () => {
    if (contextMenu.style.display != "none") {
        contextMenu.style.display = "none";
    }
});