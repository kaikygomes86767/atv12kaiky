console.log('Olá mundo!');


let novoElemento = document.createElement('h1');


novoElemento.innerText = 'Hello, World! English! (Inglês) Ok?!';


let elementoBody = document.body;


elementoBody.appendChild(novoElemento);


novoElemento.style.backgroundColor = 'blue';
novoElemento.style.color = 'yellow';


let paragrafo = document.createElement('p');
paragrafo.innerText = 'Este parágrafo foi gerado com criatividade em JavaScript!';
paragrafo.style.fontSize = '20px';
paragrafo.style.color = 'green';
paragrafo.style.fontFamily = 'Arial';
paragrafo.style.marginTop = '20px';
document.body.appendChild(paragrafo);


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