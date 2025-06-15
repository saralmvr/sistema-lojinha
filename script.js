let produtos = [];

fetch('produtos.json')
  .then(response => response.json())
  .then(data => {
    produtos = data;
  });

function buscarProduto() {
  const termo = document.getElementById('busca').value.trim().toLowerCase();
  const resultadoDiv = document.getElementById('resultado');
  const produto = produtos.find(p =>
    p.nome.toLowerCase().includes(termo) || p.codigo.toLowerCase().includes(termo)
  );

  if (produto) {
    resultadoDiv.innerHTML = `
      <strong>Produto:</strong> ${produto.nome}<br>
      <strong>Preço:</strong> R$ ${produto.preco.toFixed(2)}<br>
      <strong>Quantidade:</strong> ${produto.quantidade}
    `;
  } else {
    resultadoDiv.innerHTML = "Produto não encontrado.";
  }
}
