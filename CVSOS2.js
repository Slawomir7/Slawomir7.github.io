function bfunction() {

    const hidestate = document.getElementById("irmhide");
    const showstate = document.getElementById("irmshow");
    const buttontext = document.getElementById("ibrm");

    if (hidestate.style.display === "none") 
    {
        hidestate.style.display = "inline";
        showstate.style.display = "none";
        buttontext.innerHTML = "Read more if you're curious"; //This text will be dispayed by default.
    }
    else
    {
        hidestate.style.display = "none";
        showstate.style.display = "inline";
        buttontext.innerHTML ="Hide"; //This will be displayed when About me section will be opened.
    }    
}