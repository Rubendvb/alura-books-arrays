const btnOrdenar = document.getElementById("btnOrdenarPorPreco");

btnOrdenar.addEventListener("click", ordenarLivroPorPreco);

function ordenarLivroPorPreco() {
  let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);

  exibirLivrosNaTela(livrosOrdenados);
}
