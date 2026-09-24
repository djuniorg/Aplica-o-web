// Array inicial de tarefas
const tarefas = ["Estudar JavaScript", "Fazer os exercícios", "Comprar café", "Revisar o código"];

function renderizarTarefas() {
  const listaEl = document.getElementById("listaTarefas");
  listaEl.innerHTML = ""; // Limpa a lista antes de renderizar

  // TODO: Crie um laço de repetição (for ou forEach) para percorrer o array 'tarefas'
  // Dentro do laço:
  // 1. Crie um novo elemento 'li' com document.createElement('li')
  // 2. Defina o textContent do 'li' com o texto da tarefa atual
  // 3. Adicione o 'li' dentro de 'listaEl' usando appendChild()

  // Escreva seu laço aqui:
  for (let i = 0; i < tarefas.length; i++) {
    const li = document.createElement("li");
    li.textContent = tarefas[i];
    listaEl.appendChild(li);
  }
}

// Executa a função ao carregar a página
renderizarTarefas();