const setup = () => {
    let zin = "Gisteren zat de jongen op de stoep en at de helft van de appel";
    let woord = "";
    let resultaat = "";

    for (let i = 0; i <= zin.length; i++) {

        if (zin[i] !== " " && i < zin.length) {
            woord += zin[i];
        } else {

            if (woord === "de") {
                resultaat += "het";
            } else {
                resultaat += woord;
            }

            if (i < zin.length) {
                resultaat += " ";
            }

            woord = "";
        }
    }

    console.log(resultaat);
}

window.addEventListener("load", setup);