
let fotos = document.querySelectorAll(".foto");
let atual = 0;

function proximaFoto() {
    let anterior = atual;

    atual++;

    if (atual >= fotos.length) {
        atual = 0;
    }

    fotos[atual].style.transition = "none";
    fotos[atual].style.left = "100%";
    fotos[atual].offsetHeight;

    fotos[atual].style.transition = "left 2s ease";
    fotos[atual].style.left = "0";

    fotos[anterior].style.transition = "left 2s linear";
    fotos[anterior].style.left = "-100%";
}

setInterval(proximaFoto, 5000);