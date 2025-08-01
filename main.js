console.log('Olá mundo!');

// Criando um novo elemento 
let novoElemento = document.createElement('h1');

// Alterando o conteúdo de texto do elemento
novoElemento.innerText = 'Hello, World! English! (Inglês) Ok?!';

// Selecionando o elemento body
let elementoBody = document.body;

// Colocando o novo elemento no body
elementoBody.appendChild(novoElemento);

// Deixando bonito agora
novoElemento.style.backgroundColor = 'blue';
novoElemento.style.color = 'yellow';

// Criatividade com IA: gerando um parágrafo animado
let paragrafo = document.createElement('p');
paragrafo.innerText = 'Este parágrafo foi gerado com criatividade em JavaScript!';
paragrafo.style.fontSize = '20px';
paragrafo.style.color = 'green';
paragrafo.style.fontFamily = 'Arial';
paragrafo.style.marginTop = '20px';
document.body.appendChild(paragrafo);

// Criatividade extra: botão que muda o fundo
let botao = document.createElement('button');
botao.innerText = 'Clique para mudar o fundo';
botao.style.padding = '10px';
botao.style.marginTop = '20px';
botao.style.fontSize = '16px';
document.body.appendChild(botao);

botao.onclick = function () {
  document.body.style.backgroundColor = 'black';
  novoElemento.innerText = 'Fundo alterado!';
};