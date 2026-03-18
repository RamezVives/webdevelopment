const setup = () => {
    document.getElementById("toon").addEventListener("click", toonResultaat);

    function toonResultaat() {

        // checkbox
        let roker = document.getElementById("roker").checked;
        console.log("Is roker:", roker);

        // radiobuttons
        let talen = document.getElementsByName("taal");
        let gekozenTaal = "";

        for (let i = 0; i < talen.length; i++) {
            if (talen[i].checked) {
                gekozenTaal = talen[i].value;
            }
        }
        console.log("Moedertaal:", gekozenTaal);

        // select
        let buurland = document.getElementById("buurland").value;
        console.log("Favoriete buurland:", buurland);

        // multi select (aangepast)
        let bestelling = document.getElementById("bestelling");
        let tekst = "Bestelling bestaat uit ";

        for (let i = 0; i < bestelling.options.length; i++) {
            if (bestelling.options[i].selected) {
                tekst += bestelling.options[i].text + " ";
            }
        }

        tekst += ".";

        console.log(tekst);
    }
}

window.addEventListener("load", setup);