const setup = () => {
    let gemeenten = [];
    let invoer;

// gemeenten vragen
    while (true) {

        invoer = prompt("Geef een gemeente in");

        if (invoer === null) {
            break;
        }

        if (invoer.toLowerCase() === "stop") {
            break;
        }

        gemeenten.push(invoer);
    }

// alfabetisch sorteren
    gemeenten.sort();

// dropdown vullen
    let lijst = document.getElementById("lijst");

    for (let i = 0; i < gemeenten.length; i++) {

        let option = document.createElement("option");
        option.text = gemeenten[i];
        lijst.add(option);
    }
}

window.addEventListener("load", setup);