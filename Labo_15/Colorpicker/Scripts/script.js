const update = () => {

    let r = document.getElementById("red").value;
    let g = document.getElementById("green").value;
    let b = document.getElementById("blue").value;

    document.getElementById("redValue").textContent = r;
    document.getElementById("greenValue").textContent = g;
    document.getElementById("blueValue").textContent = b;

    let kleur = `rgb(${r},${g},${b})`;

    document.getElementById("colorBox").style.backgroundColor = kleur;
};

const setup = () => {
    document.getElementById("red").addEventListener("input", update);
    document.getElementById("green").addEventListener("input", update);
    document.getElementById("blue").addEventListener("input", update);
};

window.addEventListener("load", setup);