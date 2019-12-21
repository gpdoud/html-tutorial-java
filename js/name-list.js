let names = [
    { name: "Karlee", bday: "10/30", favColor: "aqua", favNumber: 7 }, 
    { name: "Fred", bday: "3/16", favColor: "green", favNumber: 9 }, 
    { name: "Anthony", bday: "12/15", favColor: "red", favNumber: 10 }, 
    { name: "Joelle", bday: "5/9", favColor: "blue", favNumber: 76 }, 
    { name: "Brytt", bday: "11/14", favColor: "blue", favNumber: 21 } 
];

function sortFn(a, b) {
    if(a.favNumber === b.favNumber) {
        return 0;
    }
    return a.favNumber < b.favNumber ? -1 : 1;
}


function display() {
    let tableCtrl = document.getElementById("names");
    for (let n of names) {
        let tr = "<tr>";
        tr += "<td>" + n.name + "</td>";
        tr += "<td>" + n.bday + "</td>";
        tr += "<td>" + n.favColor + "</td>";
        tr += "<td>" + n.favNumber + "</td>";
        tr += "</tr>";
        tableCtrl.innerHTML += tr;
    }
}
function loaded() {
    display();
}