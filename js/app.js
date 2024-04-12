let $ = document;

let bodyElem = $.body;
let contextMenu = $.getElementById ("contextMenu");
let saveValuePageX ;
let saveValuePageY ;

bodyElem.addEventListener ("contextmenu" , (event) => {
    event.preventDefault ();
    saveValuePageX = event.pageX;
    saveValuePageY = event.pageY;
    contextMenu.style.left = saveValuePageX + "px";
    contextMenu.style.top = saveValuePageY + "px";
    contextMenu.style.display = "flex";
});

bodyElem.addEventListener ("keydown" , (event) => {
    if (event.key === "Escape") {
        contextMenu.style.display = "none";
    }
});