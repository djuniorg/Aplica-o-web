const selectEstados = document.getElementById("selectEstados");
const btnDetalhes = document.getElementById("btnDetalhes");
const divCapital = document.getElementById("divCapital");
const divArea = document.getElementById("divArea");
const divPopulacao = document.getElementById("divPopulacao");
const divBandeira = document.getElementById("divBandeira");

// Busca os pacientes no arquivo JSON
fetch("pacientes.json")
    .then(resposta => resposta.json())
    .then(pacientes => {

        // Evento do botão Detalhes
        btnDetalhes.addEventListener("click", function () {

        // Pega o índice do paciente selecionado
        const index = selectEstados.value;

        // Verifica se existe uma seleção
        if (index !== "") {

        // Pega o paciente do arquivo JSON
        const paciente = pacientes[index];

        // Mostra as informações do paciente
        divCapital.textContent = paciente.idade;
        divArea.textContent = paciente.profissao;
        divPopulacao.textContent = paciente.seguidores;

        divBandeira.innerHTML =
            `<img src="${paciente.foto}" alt="Foto de ${paciente.nome}">`;
            }
        });
    });

