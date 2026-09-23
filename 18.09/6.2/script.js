
let produtosData = [];


// Carrega o arquivo estoque.json
async function carregarEstoque() {

    try {

        const response = await fetch('estoque.json');

        if (!response.ok) {
            throw new Error('Erro ao carregar estoque.json');
        }

        produtosData = await response.json();

        renderizarCards();

    } catch (error) {

        console.error(error);

        alert(
            'Não foi possível carregar o arquivo estoque.json.'
        );

    }

}


// Mostra os produtos na tela
function renderizarCards() {

    const container =
        document.getElementById('gridProdutos');

    container.innerHTML = '';


    produtosData.forEach(produto => {

        const card =
            document.createElement('div');

        card.className = 'card';


        card.innerHTML = `

          <img
            src="${produto.foto}"
            alt="${produto.nome}"
          >

          <div class="card-body">

            <h3 class="card-title">
              ${produto.nome}
            </h3>

            <p class="card-text">
              <strong>Preço de Compra:</strong>
              R$ ${produto.precoCompra.toFixed(2)}
            </p>

            <p class="card-text">
              <strong>Preço de Venda:</strong>
              R$ ${produto.precoVenda.toFixed(2)}
            </p>

            <p class="card-text">
              <strong>Quantidade em estoque:</strong>
              ${produto.quantidadeEstoque}
            </p>

            <p class="card-text">
              <strong>Unidade:</strong>
              ${produto.unidade}
            </p>


            <div class="estoque-control">

              <label for="mov-${produto.id}">
                Entrada / Saída:
              </label>

              <input
                type="number"
                id="mov-${produto.id}"
                value="0"
                placeholder="Ex: 10 ou -5"
              >

            </div>

          </div>

        `;


        container.appendChild(card);

    });

}


/*
  6.1.b

  Atualiza a quantidade de cada produto.
*/
function atualizarEstoque() {

    produtosData.forEach(produto => {

        const campo =
            document.getElementById(
                `mov-${produto.id}`
            );


        const movimento =
            parseInt(campo.value);


        produto.quantidadeEstoque =
            produto.quantidadeEstoque + movimento;

    });


    renderizarCards();

}


/*
  6.1.b

  Salva o estoque atualizado
  em um novo arquivo JSON.
*/
function salvarEstoque() {

    const dados =
        JSON.stringify(
            produtosData,
            null,
            2
        );


    const arquivo =
        new Blob(
            [dados],
            {
                type: 'application/json'
            }
        );


    const url =
        URL.createObjectURL(arquivo);


    const link =
        document.createElement('a');


    link.href = url;

    link.download =
        'estoque_atualizado.json';


    document.body.appendChild(link);

    link.click();

    link.remove();


    URL.revokeObjectURL(url);

}


// Carrega o estoque automaticamente
document.addEventListener(
    'DOMContentLoaded',
    carregarEstoque
);