
const pacientes = [
    {
        nome: "Luan Santana",
        idade: "35 anos",
        profissao: "Cantor",
        seguidores: "36,9 milhões",
        foto: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/76/2Z9A7852.jpg/500px-2Z9A7852.jpg?utm_source=pt.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"
    },
    {
        nome: "Igor Guilherme",
        idade: "29 anos",
        profissao: "Cantor e compositor",
        seguidores: "10,8 milhões",
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzjmourmzitlMcs4uWjbPw1s70KYCeSaBf0TcyIyzUzbCNWWEpeowXBFUDmmY3VMf5hQEV-hWflF1ZYqASoEcNJMkVXhmBaluxthPmSA&s=10"
    },
    {
        nome: "Natanzinho Lima",
        idade: "23 anos",
        profissao: "Cantor",
        seguidores: "11,6 milhões",
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMKOGlQ0FbAG_Eiwv1-M_4TirDvxGXg8WortBVV-lY0FuwcZXLyhhFGfaZtRlMzx52OC_h9cIIO2orcNNC2mZTt2i8z2R-whcoNaotwg&s=10"
    },
    {
        nome: "Travis Scott",
        idade: "35 anos",
        profissao: "Rapper e cantor",
        seguidores: "58,8 milhões",
        foto: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3f/TravisScott-byPhilipRomano.jpg/500px-TravisScott-byPhilipRomano.jpg?utm_source=pt.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"
    },
    {
        nome: "Faustão",
        idade: "76 anos",
        profissao: "Apresentador de televisão",
        seguidores: "3,2 milhões",
        foto: "https://static1.purepeople.com.br/articles/4/38/21/24/@/4390936-faustao-precisara-passsar-por-cuidados-n-580x0-3.jpg"
    },
    {
        nome: "Memphis Depay",
        idade: "32 anos",
        profissao: "Jogador de futebol",
        seguidores: "18,5 milhões",
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTofsVFKigIY4fch6z0qftkUQybsLptD7RDbCbRVlzKkTSALOVL7oiAcU&s=10"
    },
    {
        nome: "Tigrinho",
        idade: "31 anos",
        profissao: "Influenciador digital",
        seguidores: "1,2 milhão",
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeiBeadv_aJHjIpm0p1lix2WUxcgL_QoYbBKz73I3-4A&s=10"
    },
    {
        nome: "Deolane Bezerra",
        idade: "38 anos",
        profissao: "Advogada e influenciadora",
        seguidores: "21,1 milhões",
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpWC82tamGARJA9JmnDom9yZ5QRsnxZuO1WpdAnmAcVCcIoO1cXRug4Uw&s=10"
    }
];

// Mapeamento dos elementos da página
const selectEstados = document.getElementById("selectEstados");
const btnDetalhes = document.getElementById("btnDetalhes");
const divCapital = document.getElementById("divCapital");
const divArea = document.getElementById("divArea");
const divPopulacao = document.getElementById("divPopulacao");
const divBandeira = document.getElementById("divBandeira");

// Evento do botão Detalhes
btnDetalhes.addEventListener("click", function () {

    // Pega o índice do paciente selecionado
    const index = selectEstados.value;

    // Verifica se existe uma seleção
    if (index !== "") {

        // Pega o objeto do paciente selecionado
        const paciente = pacientes[index];

        // Mostra as informações do paciente
        divCapital.textContent = paciente.idade;
        divArea.textContent = paciente.profissao;
        divPopulacao.textContent = paciente.seguidores;

        // Mostra a foto do paciente
        divBandeira.innerHTML =
            `<img src="${paciente.foto}" alt="Foto de ${paciente.nome}">`;
    }
});
