// 5 Arrays paralelos com informações da Wikipédia
const siglas = ["AL", "BA", "CE", "MA", "PB", "PE", "PI", "RN", "SE"];
const capitais = ["Maceió", "Salvador", "Fortaleza", "São Luís", "João Pessoa", "Recife", "Teresina", "Natal", "Aracaju"];
const areas = [ "27.830,661 km²", "564.760,429 km²", "148.894,447 km²", "329.651,496 km²", "56.467,242 km²", "98.067,877 km²", "251.755,481 km²", "52.809,599 km²", "21.938,188 km²"];
const populacoes = [ "3.220.848 hab.", "14.870.907 hab.", "9.268.836 hab.", "7.018.211 hab.", "4.164.468 hab.", "9.562.007 hab.", "3.384.547 hab.", "3.455.236 hab.", "2.299.425 hab."
];const bandeiras = [
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/88/Bandeira_de_Alagoas.svg/1280px-Bandeira_de_Alagoas.svg.png?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=thumbnail",
    "https://upload.wikimedia.org/wikipedia/commons/2/28/Bandeira_da_Bahia.svg?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original",
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e2/Antiga_bandeira_do_estado_do_Cear%C3%A1.jpg/3840px-Antiga_bandeira_do_estado_do_Cear%C3%A1.jpg?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=thumbnail",
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/45/Bandeira_do_Maranh%C3%A3o.svg/960px-Bandeira_do_Maranh%C3%A3o.svg.png?utm_source=pt.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
    "https://autenticabandeiras.com.br/wp-content/uploads/2024/04/Bandeira-Paraiba.png",
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/59/Bandeira_de_Pernambuco.svg/960px-Bandeira_de_Pernambuco.svg.png?utm_source=pt.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/33/Bandeira_do_Piau%C3%AD.svg/960px-Bandeira_do_Piau%C3%AD.svg.png?utm_source=pt.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/30/Bandeira_do_Rio_Grande_do_Norte.svg/960px-Bandeira_do_Rio_Grande_do_Norte.svg.png?utm_source=pt.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
    "https://upload.wikimedia.org/wikipedia/commons/b/be/Bandeira_de_Sergipe.svg?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original"
];

// Mapeamento dos elementos da DOM
const selectEstados = document.getElementById("selectEstados");
const btnDetalhes = document.getElementById("btnDetalhes");
const divCapital = document.getElementById("divCapital");
const divArea = document.getElementById("divArea");
const divPopulacao = document.getElementById("divPopulacao");
const divBandeira = document.getElementById("divBandeira");

// EventListener para o evento onclick do botão
btnDetalhes.addEventListener("click", function () {
    // Pega o índice selecionado na listbox (0 a 3)
    const index = selectEstados.value;

    // Se houver seleção válida
    if (index !== "") {
        // Preenche as divs usando o mesmo índice nos arrays paralelos
        divCapital.textContent = capitais[index];
        divArea.textContent = areas[index];
        divPopulacao.textContent = populacoes[index];

        // Exibe a imagem da bandeira no quarto quadro
        divBandeira.innerHTML = `<img src="${bandeiras[index]}" alt="Bandeira de ${siglas[index]}">`;
    }
});

