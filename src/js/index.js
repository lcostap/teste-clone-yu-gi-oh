const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

cartoes.forEach((cartao) => {
  cartao.addEventListener("click", function () {
    toggleEstadoCarta(cartaoAtual);
  });
});

btnAvancar.addEventListener("click", function () {
  cartaoEstaVisivel(cartaoAtual);
  if (cartaoAtual === cartoes.length - 1) cartaoAtual = -1;

  esconderCartaoSelecionado();

  cartaoAtual++;
  mostrarCartao(cartaoAtual);
});

btnVoltar.addEventListener("click", function () {
  cartaoEstaVisivel(cartaoAtual);
  if (cartaoAtual === 0) cartaoAtual = cartoes.length;

  esconderCartaoSelecionado();

  cartaoAtual--;
  mostrarCartao(cartaoAtual);
});

function cartaoEstaVisivel(cartaoAtual) {
  const cartao = cartoes[cartaoAtual];

  const cartaoEstaVirado = cartao.classList.contains("virar");
  if (cartaoEstaVirado) toggleEstadoCarta(cartaoAtual);
}

function toggleEstadoCarta(cartaoAtual) {
  const cartao = cartoes[cartaoAtual];
  const cartaVirada = cartao.querySelector(".carta-virada");
  cartao.classList.toggle("virar");
  cartaVirada.classList.toggle("mostrar-fundo-carta");
  const descricao = cartao.querySelector(".descricao");
  descricao.classList.toggle("esconder");
}

function mostrarCartao(cartaoAtual) {
  cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoSelecionado() {
  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");
}
