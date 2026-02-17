const setup = () => {
    window.alert("Tijd om te slapen ");

    let result= window.confirm("are you sure?");
    let naam= window.prompt("hoe heet je", "onbekend");
    if (result && naam!=='') {
        console.log(result);
    }


}

window.addEventListener("load", setup);