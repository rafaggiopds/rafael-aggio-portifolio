// =========================
// ARQUIVO: script.js
// =========================

// FORMULÁRIO

const formulario = document.getElementById("formContato");

// EVENTO DE ENVIO

formulario.addEventListener("submit", function(event){

    // Impede recarregar página
    event.preventDefault();

    // CAMPOS

    const nome = document.getElementById("nome").value.trim();

    const email = document.getElementById("email").value.trim();

    const mensagem = document.getElementById("mensagem").value.trim();

    // VALIDAÇÃO

    if(nome === "" || email === "" || mensagem === ""){

        alert("Preencha todos os campos.");

        return;
    }

    // Validação simples de email

    if(!email.includes("@") || !email.includes(".")){

        alert("Digite um e-mail válido.");

        return;
    }

    // Sucesso

    alert("Mensagem enviada com sucesso!");

    // Limpa formulário

    formulario.reset();

});

// =========================
// TEMA CLARO / ESCURO
// =========================

const temaBtn = document.getElementById("temaBtn");

// Evento do botão

temaBtn.addEventListener("click", function(){

    // Alterna tema

    document.body.classList.toggle("light-mode");

    // Troca ícone

    if(document.body.classList.contains("light-mode")){

        temaBtn.textContent = "☀️";

    }else{

        temaBtn.textContent = "🌙";

    }

});