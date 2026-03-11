const setup = () => {

    let knop = document.getElementById("btnToon");
    knop.addEventListener("click", toonTekst);

}

const toonTekst = () => {

    let tekst = document.getElementById("txtInput").value;

    let resultaat = "";

    for (let i = 0; i < tekst.length; i++) {

        if (tekst[i] !== " ") {
            resultaat += tekst[i] + " ";
        }

    }

    console.log(resultaat.trim());

}

window.addEventListener("load", setup);