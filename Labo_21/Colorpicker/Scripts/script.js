const update = () => {

    let r = document.getElementById("red").value;
    let g = document.getElementById("green").value;
    let b = document.getElementById("blue").value;

    document.getElementById("redValue").textContent = r;
    document.getElementById("greenValue").textContent = g;
    document.getElementById("blueValue").textContent = b;

    let kleur = `rgb(${r},${g},${b})`;

    document.getElementById("swatch").style.backgroundColor = kleur;

    // sliders opslaan
    let sliders = { r, g, b };
    localStorage.setItem("sliders", JSON.stringify(sliders));
};

const selectColor = (event) => {

    let color = event.currentTarget.style.backgroundColor;

    document.getElementById("swatch").style.backgroundColor = color;

    let start = color.indexOf("(");
    let end = color.indexOf(")");
    let numbers = color.substring(start + 1, end);

    let parts = numbers.split(",");

    let r = parseInt(parts[0]);
    let g = parseInt(parts[1]);
    let b = parseInt(parts[2]);

    document.getElementById("red").value = r;
    document.getElementById("green").value = g;
    document.getElementById("blue").value = b;

    document.getElementById("redValue").textContent = r;
    document.getElementById("greenValue").textContent = g;
    document.getElementById("blueValue").textContent = b;

    // ook opslaan
    let sliders = { r, g, b };
    localStorage.setItem("sliders", JSON.stringify(sliders));
};

const saveColor = () => {

    let kleur = document.getElementById("swatch").style.backgroundColor;

    let colors = JSON.parse(localStorage.getItem("colors")) || [];
    colors.push(kleur);
    localStorage.setItem("colors", JSON.stringify(colors));

    createColorBox(kleur);
};

const createColorBox = (kleur) => {

    let box = document.createElement("div");
    box.className = "colorBox";
    box.style.backgroundColor = kleur;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.className = "deleteBtn";

    deleteBtn.addEventListener("click", () => {

        box.remove();

        let colors = JSON.parse(localStorage.getItem("colors")) || [];
        colors = colors.filter(c => c !== kleur);
        localStorage.setItem("colors", JSON.stringify(colors));
    });

    box.addEventListener("click", selectColor);

    box.appendChild(deleteBtn);

    document.getElementById("savedColors").appendChild(box);
};

const loadData = () => {

    //  sliders laden
    let sliders = JSON.parse(localStorage.getItem("sliders"));
    if (sliders) {
        document.getElementById("red").value = sliders.r;
        document.getElementById("green").value = sliders.g;
        document.getElementById("blue").value = sliders.b;
    }


    let colors = JSON.parse(localStorage.getItem("colors")) || [];

    for (let i = 0; i < colors.length; i++) {
        createColorBox(colors[i]);
    }
};

const setup = () => {

    let sliders = document.querySelectorAll("input[type=range]");

    sliders.forEach(slider => {
        slider.addEventListener("input", update);
    });

    document.getElementById("saveBtn")
        .addEventListener("click", saveColor);

    loadData();
    update();
};

window.addEventListener("load", setup);