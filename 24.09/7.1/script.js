function atualizarPerfil() {
  // 1. Declare três variáveis com suas informações (nome, idade e biografia)
  let nome = "Dilson Rodrigues Gonçalves Junior";
  let idade = 18;
  let bio = "Dilson Rodrigues Gonçalves Junior, conhecido como Junior, é estudante de Análise e Desenvolvimento de Sistemas. Possui interesse por tecnologia, programação e desenvolvimento de sistemas, estudando linguagens como JavaScript, TypeScript, Java e Python. Além da faculdade, desenvolve projetos próprios envolvendo desenvolvimento web, bancos de dados e APIs, buscando adquirir experiência prática. Também possui experiências profissionais nas áreas administrativa e logística e atualmente busca uma oportunidade de estágio em Tecnologia da Informação. Junior também se interessa por empreendedorismo, inteligência artificial e criação de soluções digitais, buscando constantemente ampliar seus conhecimentos e desenvolver novas habilidades.";
  // TODO: Crie a variável 'nome' (string)

  document.getElementById("nome").textContent = nome;
  // TODO: Crie a variável 'idade' (number)
  document.getElementById("idade").textContent = "Idade: " + idade;
  // TODO: Crie a variável 'bio' (string)
  document.getElementById("biografia").textContent = bio;

  // 2. Atualize os elementos do HTML utilizando o DOM
  // TODO: Altere o textContent do elemento com id "nome" para a variável 'nome'
  // TODO: Altere o textContent do elemento com id "idade" para "Idade: " + idade
  // TODO: Altere o textContent do elemento com id "biografia" para a variável 'bio'
}