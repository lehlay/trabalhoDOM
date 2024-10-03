

// Selecionando pelo ID do título
const title = document.getElementById("titulo");

// Selecionando o botão que exibe "Hello"
const helloBtn = document.getElementById("botao-ola");

// Selecionando o botão que altera o título
const changeTitleBtn = document.getElementById("btn-mudar-titulo");

const frase = document.getElementsByClassName("mensagem2");

const changeFrase = document.getElementById("btn-mudar-frase");


// Evento de clique para exibir uma mensagem "Olá"
helloBtn.addEventListener("click", function () {
  alert("Olá!");
});

// Evento de clique para alterar o texto do título
changeTitleBtn.addEventListener("click", function () {
  title.textContent = "O Titulo foi mudado utilizando JS!";
});


changeFrase.addEventListener("click", function () {
      frase[0].textContent = "Frase 1 alterada";
      frase[1].textContent = "Frase 2 alterada";
      frase[2].textContent = "Frase 3 alterada";

    });