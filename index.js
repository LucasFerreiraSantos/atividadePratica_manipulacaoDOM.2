function editarCard() {
  alert("Clicou em editar!");
}

function apagarCard() {
  if (confirm("Tem certeza da exclusão do card?")) {
    alert("Confirmado.");
  } else {
    alert("Cancelou.");
  }
}

const cards = document.querySelectorAll(".card");
cards.forEach((cards) => {
  cards.style.backgroundColor = "orange";
});

const tituloCard = document.querySelectorAll(".titulo-card");
tituloCard.forEach((titulo) => {
  titulo.style.cssText = "margin: 20px 0px";
  titulo.style.color = "#2b385b";
  titulo.innerText = "Meu card";
});

const descricaoCard = document.querySelectorAll(".descricao-card");
descricaoCard.forEach((descricao) => {
  descricao.style.cssText = "margin: 40px 0px";
  descricao.style.fontSize = "13px";
  descricao.style.color = "white";
  descricao.innerText = "Descrição modificada pelo JavaScript.";
});

const btnEditar = document.querySelectorAll(".botao-editar");
btnEditar.forEach((editar) => {
  editar.style.backgroundColor = "green";
  editar.style.padding = "10px";
  editar.style.borderRadius = "10%";
  editar.style.margin = "0px 10px";
  editar.style.border = "none";
  editar.style.color = "white";
  editar.setAttribute("onclick", "editarCard()");
});

const btnApagar = document.querySelectorAll(".botao-apagar");
btnApagar.forEach((apagar) => {
  apagar.style.backgroundColor = "red";
  apagar.style.padding = "10px";
  apagar.style.borderRadius = "10%";
  apagar.style.border = "none";
  apagar.style.color = "white";
  apagar.setAttribute("onclick", "apagarCard()");
});
