/*Name this external file gallery.js*/

function upDate(previewPic) {
    let elemento = document.getElementById("image");
    /* In this function you should 
    1) change the url for the background image of the div with the id = "image"*/
    elemento.style.backgroundImage = "url(" + previewPic.src + ")";
    /*2) Change the text  of the div with the id = "image" */
    elemento.innerHTML = previewPic.alt;
}

function unDo() {
    var elemento = document.getElementById("image");
    /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" */
    elemento.style.backgroundImage = "";
    /*2) Change the text  of the div with the id = "image" */
    elemento.innerHTML = "Hover over an image below to display here";
}
