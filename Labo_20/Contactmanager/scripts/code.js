let personen = [];
let huidigeIndex = -1;

// Bewaar knop
const bewaarBewerktePersoon = () => {
    valideer();

    // check of er fouten zijn
    let fouten = document.getElementsByClassName("invalid");
    if (fouten.length > 0) {
        return;
    }

    // waarden ophalen
    let persoon = {
        voornaam: document.getElementById("txtVoornaam").value,
        familienaam: document.getElementById("txtFamilienaam").value,
        geboorteDatum: document.getElementById("txtGeboorteDatum").value,
        email: document.getElementById("txtEmail").value,
        aantalKinderen: document.getElementById("txtAantalKinderen").value
    };

    if (huidigeIndex === -1) {
        // NIEUWE persoon
        personen.push(persoon);
    } else {
        // BESTAANDE aanpassen
        personen[huidigeIndex] = persoon;
    }

    toonLijst();
};

// Nieuw knop
const bewerkNieuwePersoon = () => {
    huidigeIndex = -1;

    document.getElementById("txtVoornaam").value = "";
    document.getElementById("txtFamilienaam").value = "";
    document.getElementById("txtGeboorteDatum").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtAantalKinderen").value = "";

    clearAllErrors();
};

// lijst updaten
const toonLijst = () => {
    let lst = document.getElementById("lstPersonen");
    lst.innerHTML = "";

    for (let i = 0; i < personen.length; i++) {
        let option = document.createElement("option");
        option.text = personen[i].voornaam + " " + personen[i].familienaam;
        option.value = i; // index opslaan
        lst.appendChild(option);
    }
};

// select change
const toonPersoon = () => {
    let lst = document.getElementById("lstPersonen");
    huidigeIndex = lst.value;

    let persoon = personen[huidigeIndex];

    document.getElementById("txtVoornaam").value = persoon.voornaam;
    document.getElementById("txtFamilienaam").value = persoon.familienaam;
    document.getElementById("txtGeboorteDatum").value = persoon.geboorteDatum;
    document.getElementById("txtEmail").value = persoon.email;
    document.getElementById("txtAantalKinderen").value = persoon.aantalKinderen;
};

// setup
const setup = () => {
    document.getElementById("btnBewaar")
        .addEventListener("click", bewaarBewerktePersoon);

    document.getElementById("btnNieuw")
        .addEventListener("click", bewerkNieuwePersoon);

    document.getElementById("lstPersonen")
        .addEventListener("change", toonPersoon);
};

window.addEventListener("load", setup);