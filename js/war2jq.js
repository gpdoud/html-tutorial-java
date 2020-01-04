const gamePoints = 20;
let pointValue = 1;
let mypoints = gamePoints;
let opppoints = gamePoints;
let myNbr = 0;

$().ready(() => {
    display();

    $("#getnbr").click(() => {
        myNbr = Number(Math.floor(Math.random() * 11));
        $("#mynbr").val(myNbr);
    });
    
    $("#winner").click(() => {
        mypoints += pointValue;
        opppoints -= pointValue;
        reset();
        display();
    });

    $("#loser").click(() => {
        mypoints -= pointValue;
        opppoints += pointValue;
        reset();
        display();
    });
    
    $("#tie").click(() => {
        pointValue = pointValue == 1 ? 5 : pointValue + 5;
        $("#msg").css("display", "unset");
        $("#tie").text("War!");
        display()
    });
});

const display = () => {
    $("#myscore").text(mypoints);
    $("#oppscore").text(opppoints);
    $("#ptvalue").text(pointValue);
    $("#mynbr").val('');
}
const reset = () => {
    $("#msg").css("display", "none");
    $("#tie").text("Tie");
    pointValue = 1;
}