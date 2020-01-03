let gamePoints = 20;
let pointValue = 1;
let mypoints = gamePoints;
let opppoints = gamePoints;
let myNbr = 0;
let oppNbr = 0;

const loaded = () => {
    display();
}
const getnbr = () => {
    myNbr = Number(Math.floor(Math.random() * 11));
    document.getElementById("mynbr").value = myNbr;
}
const winner = () => {
    mypoints += pointValue;
    opppoints -= pointValue;
    reset();
    display();
}
const loser = () => {
    mypoints -= pointValue;
    opppoints += pointValue;
    reset();
    display();
}
const tie = () => {
    pointValue = pointValue == 1 ? 5 : pointValue + 5;
    document.getElementById("msg").style.display = "unset";
    document.getElementById("war").innerText = "War!"
    display()
}
const display = () => {
    document.getElementById("myscore").innerText = mypoints;
    document.getElementById("oppscore").innerText = opppoints;
    document.getElementById("ptvalue").innerText = pointValue;
    document.getElementById("mynbr").value = '';
}
const reset = () => {
    document.getElementById("msg").style.display = "none";
    document.getElementById("war").innerText = "Tie"
    pointValue = 1;
}