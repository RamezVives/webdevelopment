const setup = () => {
    let geboortedatum = new Date("2005-08-13");
    let vandaag = new Date();

    let verschilMs = vandaag - geboortedatum;
    let dagen = Math.floor(verschilMs / (1000 * 60 * 60 * 24));

    console.log("Aantal dagen sinds je geboorte: " + dagen);
}

window.addEventListener("load", setup);