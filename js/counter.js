var nbr = 0;
function inc() { nbr++; display(); }
function dec() { nbr--; display(); }
function display() {
    var inpCtrl = document.getElementById("nbr");
    inpCtrl.value = nbr;
    inpCtrl.style.color = (nbr % 3 == 0) ? "red" : "black";
    inpCtrl.style.fontWeight = (nbr % 5 == 0) ? "bold" : "normal";
    inpCtrl.style.fontStyle = (nbr % 7 == 0) ? "italic" : "normal";
}