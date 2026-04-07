const setup = () => {
    let student1 = {
        voornaam: "Jan",
        familienaam: "Janssens",
        geboorteDatum: new Date("1993-12-31"),
        adres: {
            straat: "Kerkstraat 13",
            postcode: "8500",
            gemeente: "Kortrijk"
        },
        isIngeschreven: true,
        namenVanExen: ["Sofie", "Berta"],
        aantalAutos: 2
    };

    // object → JSON
    let jsonString1 = JSON.stringify(student1);
    console.log(jsonString1);

    // JSON → object
    let jsonString2 = jsonString1;

    let student2 = JSON.parse(jsonString2);

    console.log(student2.voornaam);
}

window.addEventListener("load", setup);