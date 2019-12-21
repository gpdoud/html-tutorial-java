
const roll = () => {
    return Math.floor(Math.random() * 6) + 1;
}
const pigdice = () => {
    // play game here and return score
    let total = 0;

    let die = roll();
    while(die != 1) {
        total += die;
        die = roll();
    }

    return total;
}
const play = () => {
    let highScore = 150;
    let score = pigdice();
    while(true) {
        score = pigdice();
        if(score > highScore) {
            highScore = score;
            console.log("High score is", highScore);
        }
    }
}