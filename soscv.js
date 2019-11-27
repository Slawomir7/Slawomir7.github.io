//
function bfunction() {

    const hidestate = document.getElementById("irmhide");
    const showstate = document.getElementById("irmshow");
    const buttontext = document.getElementById("ibrm");

    if (hidestate.style.display === "none") {
        hidestate.style.display = "inline";
        showstate.style.display = "none";
        buttontext.innerHTML = "Read more   "; //This text will be dispayed by default.
    }
    else {
        hidestate.style.display = "none";
        showstate.style.display = "inline";
        buttontext.innerHTML = "Hide"; //This will be displayed when 'About me' section will be opened.
    }
}

function funcexpand() {
    var x = document.getElementById("Itopnav");
    if (x.className === "Cnav") {
        x.className += " responsive";
    }
    else {
        x.className = "Cnav"
    }
}
function galleryFunction(imgs) {
    var expandImage = document.getElementById("expandedimage");
    var caption = document.getElementById("caption");
    expandImage.src = imgs.src;
    //caption.innerHTML = imgs.alt;
    expandImage.parentElement.style.display = "block";
}
