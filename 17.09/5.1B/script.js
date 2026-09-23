// 5 Arrays paralelos com informações da Wikipédia
const siglas = ["Luan Santana", "Igor Guilherme", "Natanzinho Lima", "Travis Scott", "Faustão", "Mephis Depay", "Tigrinho", "Deolaine"];
const capitais = [
    "35 anos", // Luan Santana
    "29 anos", // Igor Guilherme (MC IG)
    "23 anos", // Natanzinho Lima
    "35 anos", // Travis Scott
    "76 anos", // Faustão
    "32 anos", // Memphis Depay
    "31 anos", // Tigrinho
    "38 anos", // Deolane Bezerra
];
const areas = [
    "Cantor",                    // Luan Santana
    "Cantor e compositor",       // Igor Guilherme (MC IG)
    "Cantor",                    // Natanzinho Lima
    "Rapper e cantor",           // Travis Scott
    "Apresentador de televisão", // Faustão
    "Jogador de futebol",        // Memphis Depay
    "Influenciador digital",     // Tigrinho
    "Advogada e influenciadora", // Deolane Bezerra
];
const populacoes = [
    "36,9 milhões", // Luan Santana
    "10,8 milhões", // Igor Guilherme (MC IG)
    "11,6 milhões", // Natanzinho Lima
    "58,8 milhões", // Travis Scott
    "3,2 milhões",  // Faustão
    "18,5 milhões", // Memphis Depa y
    "1,2 milhão",   // Tigrinho
    "21,1 milhões", // Deolane Bezerra
];
const bandeiras = [
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/76/2Z9A7852.jpg/500px-2Z9A7852.jpg?utm_source=pt.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzjmourmzitlMcs4uWjbPw1s70KYCeSaBf0TcyIyzUzbCNWWEpeowXBFUDmmY3VMf5hQEV-hWflF1ZYqASoEcNJMkVXhmBaluxthPmSA&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMKOGlQ0FbAG_Eiwv1-M_4TirDvxGXg8WortBVV-lY0FuwcZXLyhhFGfaZtRlMzx52OC_h9cIIO2orcNNC2mZTt2i8z2R-whcoNaotwg&s=10",
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3f/TravisScott-byPhilipRomano.jpg/500px-TravisScott-byPhilipRomano.jpg?utm_source=pt.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
    "https://static1.purepeople.com.br/articles/4/38/21/24/@/4390936-faustao-precisara-passsar-por-cuidados-n-580x0-3.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTofsVFKigIY4fch6z0qftkUQybsLptD7RDbCbRVlzKkTSALOVL7oiAcU&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeiBeadv_aJHjIpm0p1lix2WUxcgL_QoYbBKz73I3-4A&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpWC82tamGARJA9JmnDom9yZ5QRsnxZuO1WpdAnmAcVCcIoO1cXRug4Uw&s=10",
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

