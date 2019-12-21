const loaded = () => {
    let parms = getUrlParms();
    console.log(parms);
    // get access to the control
    let lblCtrl = document.getElementById("name");
    lblCtrl.innerHTML = `<p>${parms.name}</p>`;
}
