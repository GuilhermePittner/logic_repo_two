/*
*/
var valorCarrinho;
limpar();

//var valorCarrinho = 1400;

function adicionar() {

  // Obter o elemento select.
  let selectElement = document.getElementById("produto");
  let valorSelecionado = selectElement.value;


  // Tratar o valor pós 'R$'.
  let array_produto = valorSelecionado.split(' - ');
  let preco = array_produto[1].replace('R$', '');
  preco = parseInt(preco);


  // Pegar a quantidade do input e calcular valor.
  let quantidade = document.getElementById("quantidade").value;
  preco_tag = quantidade * preco;
  valorCarrinho = valorCarrinho + preco_tag;


  if (quantidade >= 1) {

    // Criar e adicionar a tag span com os novos produtos
    let textAppend = `<br> <span class="texto-azul">${quantidade}x</span> ${array_produto[0]} <span class="texto-azul">R$${preco_tag}</span>`;
    let meuSpan = document.querySelectorAll(".carrinho__produtos__produto")[0];
    meuSpan.innerHTML += textAppend;

    let valorTotal = document.getElementById("valor-total");
    valorTotal.innerHTML = `R$ ${valorCarrinho}`;

    document.getElementById("quantidade").value = 0;

  } else {
    alert("O campo 'Qtde.' não pode ficar vazio.");
  }
}



function limpar() {
  let meuSpan = document.querySelectorAll(".carrinho__produtos__produto")[0];
  meuSpan.innerHTML = '';

  let valorTotal = document.getElementById("valor-total");
  valorTotal.innerHTML = `R$0`;

  valorCarrinho = 0;
}