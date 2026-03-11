const setup = () => {
    let knop = document.getElementById("btnToon");
    knop.addEventListener("click", toonTekst);
}
const toonTekst = () => {

    let tekst = document.getElementById("txtInput").value;

    let resultaat = maakMetSpaties(tekst);

    console.log(resultaat);
}
const maakMetSpaties = (inputText) => {

    let result = "";

    for (let i = 0; i < inputText.length; i++) {

        if (inputText[i] !== " ") {
            result += inputText[i] + " ";
        }
    }

    return result.trim();
}
window.addEventListener("load", setup);