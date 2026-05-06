const input = document.getElementById("commandInput");
const button = document.getElementById("goButton");
const historyDiv = document.getElementById("history");

let historyArray = [];

// LocalStorage laden
loadHistory();

button.addEventListener("click", executeCommand);

function executeCommand() {

    let value = input.value.trim();

    if (value === "") {
        alert("Geef een commando in!");
        return;
    }

    let firstSpace = value.indexOf(" ");

    if (firstSpace === -1) {
        alert("Ongeldig commando!");
        return;
    }

    let command = value.substring(0, firstSpace);
    let searchText = value.substring(firstSpace + 1);

    let title = "";
    let url = "";
    let className = "";

    switch (command) {

        case "/g":
            title = "Google";
            url = `https://www.google.com/search?q=${encodeURIComponent(searchText)}`;
            className = "google";
            break;

        case "/y":
            title = "YouTube";
            url = `https://www.youtube.com/results?search_query=${encodeURIComponent(searchText)}`;
            className = "youtube";
            break;

        case "/x":
            title = "X";
            url = `https://x.com/hashtag/${encodeURIComponent(searchText)}`;
            className = "x";
            break;

        case "/i":
            title = "Instagram";
            url = `https://www.instagram.com/explore/tags/${encodeURIComponent(searchText)}/`;
            className = "instagram";
            break;

        default:
            alert("Onbekend commando!");
            return;
    }

    // Openen in nieuw tabblad
    window.open(url, "_blank");

    // Object maken
    let historyObject = {
        title: title,
        text: searchText,
        url: url,
        className: className
    };

    // Toevoegen aan array
    historyArray.push(historyObject);

    // Opslaan in localStorage
    saveHistory();

    // Card tonen
    addCard(historyObject);

    // Input leegmaken
    input.value = "";
}

function addCard(item) {

    let col = document.createElement("div");
    col.className = "col-md-4 mb-4";

    col.innerHTML = `
        <div class="card ${item.className}">
            <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text">${item.text}</p>
                <a href="${item.url}" target="_blank">Go!</a>
            </div>
        </div>
    `;

    historyDiv.appendChild(col);
}

function saveHistory() {
    localStorage.setItem("history", JSON.stringify(historyArray));
}

function loadHistory() {

    let storedHistory = localStorage.getItem("history");

    if (storedHistory) {

        historyArray = JSON.parse(storedHistory);

        for (let item of historyArray) {
            addCard(item);
        }
    }
}