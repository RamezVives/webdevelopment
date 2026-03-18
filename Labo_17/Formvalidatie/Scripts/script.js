const setup = () => {
    const isGetal = (tekst) => {
        return !isNaN(tekst);
    };
    document.getElementById("valideer")
        .addEventListener("click", valideerForm);

    function fout(veld, errorSpan, boodschap) {
        veld.classList.add("fout");
        errorSpan.textContent = boodschap;
    }

    function ok(veld, errorSpan) {
        veld.classList.remove("fout");
        errorSpan.textContent = "";
    }

    function valideerForm() {
        let allesCorrect = true;

        // ===== VOORNAAM =====
        let voornaam = document.getElementById("voornaam");
        let errVoornaam = document.getElementById("errVoornaam");
        let v = voornaam.value.trim();

        if (v.length > 30) {
            fout(voornaam, errVoornaam, "max. 30 karakters");
            allesCorrect = false;
        } else {
            ok(voornaam, errVoornaam);
        }

        // ===== FAMILIENAAM =====
        let familienaam = document.getElementById("familienaam");
        let errFamilie = document.getElementById("errFamilienaam");
        let f = familienaam.value.trim();

        if (f === "") {
            fout(familienaam, errFamilie, "verplicht veld");
            allesCorrect = false;
        }
        else if (f.length > 50) {
            fout(familienaam, errFamilie, "max 50 karakters");
            allesCorrect = false;
        }
        else {
            ok(familienaam, errFamilie);
        }

        // ===== GEBOORTEDATUM =====
        let datum = document.getElementById("geboortedatum");
        let errDatum = document.getElementById("errDatum");
        let d = datum.value.trim();

        if (d === "") {
            fout(datum, errDatum, "verplicht veld");
            allesCorrect = false;
        }
        else if (
            d.length !== 10 ||
            d[4] !== "-" ||
            d[7] !== "-" ||
            !isGetal(d.substring(0,4)) ||
            !isGetal(d.substring(5,7)) ||
            !isGetal(d.substring(8,10))
        ) {
            fout(datum, errDatum, "formaat is niet jjjj-mm-dd");
            allesCorrect = false;
        }
        else {
            ok(datum, errDatum);
        }

        // ===== EMAIL =====
        let email = document.getElementById("email");
        let errEmail = document.getElementById("errEmail");
        let e = email.value.trim();

        if (e === "") {
            fout(email, errEmail, "verplicht veld");
            allesCorrect = false;
        }
        else {
            let delen = e.split("@");

            if (delen.length !== 2 || delen[0] === "" || delen[1] === "") {
                fout(email, errEmail, "geen geldig email adres");
                allesCorrect = false;
            } else {
                ok(email, errEmail);
            }
        }

        // ===== KINDEREN =====
        let kinderen = document.getElementById("kinderen");
        let errKind = document.getElementById("errKinderen");
        let k = kinderen.value.trim();

        if (!isGetal(k) || k < 0) {
            fout(kinderen, errKind, "is geen positief getal");
            allesCorrect = false;
        }
        else if (k >= 99) {
            fout(kinderen, errKind, "is te vruchtbaar");
            allesCorrect = false;
        }
        else {
            ok(kinderen, errKind);
        }

        // ===== EINDE =====
        if (allesCorrect) {
            alert("proficiat!");
        }
    }
}

window.addEventListener("load", setup);