const update = () => {

    let r = document.getElementById("red").value;
    let g = document.getElementById("green").value;
    let b = document.getElementById("blue").value;

    document.getElementById("redValue").textContent = "Red " + r;
    document.getElementById("greenValue").textContent = "Green " + g;
    document.getElementById("blueValue").textContent = "Blue " + b;

    let kleur = `rgb(${r},${g},${b})`;

    document.getElementById("swatch").style.backgroundColor = kleur;
};
const selectColor = (event) => {

    // get clicked color
    let color = event.currentTarget.style.backgroundColor;

    // set preview
    document.getElementById("swatch").style.backgroundColor = color;

    // extract rgb numbers from "rgb(128, 64, 255)"
    let start = color.indexOf("(");
    let end = color.indexOf(")");
    let numbers = color.substring(start + 1, end);

    let parts = numbers.split(",");

    let r = parseInt(parts[0]);
    let g = parseInt(parts[1]);
    let b = parseInt(parts[2]);

    // update sliders
    document.getElementById("red").value = r;
    document.getElementById("green").value = g;
    document.getElementById("blue").value = b;

    // update labels
    document.getElementById("redValue").innerHTML = r;
    document.getElementById("greenValue").innerHTML = g;
    document.getElementById("blueValue").innerHTML = b;
};

const saveColor = () => {

    let swatch = document.getElementById("swatch");
    let kleur = swatch.style.backgroundColor;

    let box = document.createElement("div");
    box.className = "colorBox";
    box.style.backgroundColor = kleur;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.className = "deleteBtn";

    deleteBtn.addEventListener("click", () => {
        box.remove();
    });
    box.addEventListener("click", selectColor);
    box.appendChild(deleteBtn);

    document.getElementById("savedColors")
        .appendChild(box);
};

const setup = () => {

    let sliders = document.querySelectorAll("input[type=range]");

    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("input", update);
    }

    document.getElementById("saveBtn")
        .addEventListener("click", saveColor);

    update();
};
window.addEventListener("load", setup);
