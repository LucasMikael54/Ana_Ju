
let fila = document.querySelector(".fila-fotos");

fila.innerHTML += fila.innerHTML;

// FORMULÁRIO DE AGENDAMENTO

const formulario = document.getElementById("form-agendamento");
const confirmacao = document.getElementById("mensagem-confirmacao");

formulario.addEventListener("submit", function(event) {

    // Impede que a página recarregue
    event.preventDefault();

    // Mostra uma mensagem de confirmação
    confirmacao.textContent =
        "Solicitação preenchida com sucesso! Este formulário ainda está em teste e não enviou sua mensagem.";

    // Torna a mensagem visível
    confirmacao.hidden = false;

});