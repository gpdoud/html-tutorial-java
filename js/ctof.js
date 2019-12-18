function convert() {
    // get the celcius number
    let c = document.getElementById("celcius").value;
    let f = (c * 9 / 5) + 32;
    document.getElementById("farenheit").innerText = f.toString();
}