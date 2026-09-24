// Base de dados simulando entrada vinda de um arquivo/API JSON
//TODO: Mudar para um arquivo JSON externo e utilizar fetch() para carregar os dados

// 1. Converter o JSON para Array de objetos JavaScript
let produtos = [];
  fetch("produtos.json")
    .then(response => response.json())
    .then(dados => {
      produtos = dados;
      renderizar(produtos);
    });

function renderizar(lista) {
  const container = document.getElementById("gradeProdutos");
  container.innerHTML = "";

  if (lista.length === 0) {
    container.innerHTML = "<p>Nenhum produto encontrado.</p>";
    return;
  }

  // TODO: Percorra o array 'lista' recebido por parâmetro
  // Para cada produto, crie um card HTML contendo Nome, Categoria e Preço e insira no 'container'
  lista.forEach(produto => {
    const card = document.createElement("div");
    card.className = "card-produto";
    
    // TODO: Monte a estrutura HTML interna do card
    // Exemplo: <h3>${produto.nome}</h3> ...
    card.innerHTML = `
      <h3>${produto.nome}</h3>
      <p>Categoria: ${produto.categoria}</p>
      <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
      `;

    container.appendChild(card);
  });
}

function filtrarProdutos() {
  const texto = document.getElementById("filtroTexto").value.toLowerCase();
  const categoria = document.getElementById("filtroCategoria").value;

  // TODO: Complete a lógica de filtragem usando o método .filter() no array 'produtos'
  const produtosFiltrados = produtos.filter(produto => {
    // 1. Condição do nome (se o nome do produto contém o texto digitado)
    const bateuNome = produto.nome.toLowerCase().includes(texto);
    
    // 2. Condição da categoria (se 'categoria' for "todas" OU igual à categoria do produto)
    const bateuCategoria = produto.categoria === categoria || categoria === "todas";

    // Retorna verdadeiro se ambas as condições forem atendidas
    return bateuNome && bateuCategoria;
  });

  // Renderiza apenas os produtos filtrados
  renderizar(produtosFiltrados);
}