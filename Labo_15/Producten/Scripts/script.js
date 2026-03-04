const herbereken = () => {

    let prijzen = document.getElementsByClassName("prijs");
    let aantallen = document.getElementsByClassName("aantal");
    let btw = document.getElementsByClassName("btw");
    let subtot = document.getElementsByClassName("subtotaal");

    let totaal = 0;

    for (let i = 0; i < prijzen.length; i++) {

        let prijs = parseFloat(prijzen[i].textContent);
        let aantal = parseInt(aantallen[i].value);
        let btwPerc = parseFloat(btw[i].textContent);

        let sub = prijs * aantal * (1 + btwPerc / 100);

        subtot[i].textContent = sub.toFixed(2) + " Eur";
        totaal += sub;
    }

    document.getElementById("totaal").textContent =
        totaal.toFixed(2) + " Eur";
};

window.addEventListener("load", () => {
    document.getElementById("btn").addEventListener("click", herbereken);
});