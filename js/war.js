let gamePoints = 20;
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
    mypoints++;
    opppoints--;
    display();
}
const loser = () => {
    mypoints--;
    opppoints++;
    display();
}
const display = () => {
    document.getElementById("myscore").innerText = mypoints;
    document.getElementById("oppscore").innerText = opppoints;
    document.getElementById("mynbr").value = '';

}