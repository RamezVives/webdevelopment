const toggleKleur = (event) => {
    event.target.classList.toggle("actief");
};

const setup = () => {
    let knoppen = document.getElementsByClassName("kleurKnop");

    for (let knop of knoppen) {
        knop.addEventListener("click", toggleKleur);
    }
};

window.addEventListener("load", setup);