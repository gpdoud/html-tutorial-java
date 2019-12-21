function loaded() {
    count357();
}

const count357 = () => {
    // get span control access
    let spanCtrl = document.getElementById("ans");
    // calculate
    let total = 0;
    for (let idx = 1; idx <= 25; idx++) {
        if (idx % 3 === 0) {
            total += idx;
            continue;
        }
        if (idx % 5 === 0) {
            total += idx;
            continue;
        }
        if (idx % 7 === 0) {
            total += idx;
            continue;
        }
    }
    spanCtrl.innerText = total;
}