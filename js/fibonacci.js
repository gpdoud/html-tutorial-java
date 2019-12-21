
const genFibs = (count) => {
    let fibs = [1, 1];
    while(fibs.length < count) {
        let count = fibs.length;
        let fib = fibs[count-2] + fibs[count-1];
        fibs.push(fib);
    }
    return fibs;
};

const go = () => {
    let cnt = Number(document.getElementById("cnt").value);
    let fibArray = genFibs(cnt);
    let ansCtrl = document.getElementById("ans");
    ansCtrl.innerText = '';
    ansCtrl.innerHTML = `<p>${fibArray.join(", ")}</p>`;
    let sum = 0;
    fibArray.map(fib => sum += fib);
    ansCtrl.innerHTML += `<p>Total is ${sum}</p>`;
    
};