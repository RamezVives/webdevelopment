const setup = () => {

    const familie = ["Jan", "Piet", "Klaas", "Marie", "Sofie"];

    // aantal elementen
    console.log("Aantal elementen:", familie.length);

    // eerste, derde en vijfde element
    console.log("Eerste:", familie[0]);
    console.log("Derde:", familie[2]);
    console.log("Vijfde:", familie[4]);

    // naam toevoegen
    let extraNaam = window.prompt("Geef een extra naam:");
    voegNaamToe(familie, extraNaam);

    console.log("Nieuwe array:", familie);

    // array omzetten naar string
    let familieString = familie.join(", ");
    console.log("Als string:", familieString);
}

const voegNaamToe = (array, naam) => {
    array.push(naam);
}

window.addEventListener("load", setup);
