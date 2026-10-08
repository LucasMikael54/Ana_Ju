
let foto = document.querySelectorAll(".foto");

let atual = 0;


function proximaFoto(){
    foto[atual].classList.remove("ativo");

    atual = atual + 1;

    if(atual >= foto.length){
        atual = 0;
    }

    foto[atual].classList.add("ativo");

}

    setInterval(proximaFoto,3000);
