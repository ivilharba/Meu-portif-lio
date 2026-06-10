console.log("JavaScript funcionando!");
const texto = "Desenvolvedora Front-end";
const elemento = document.getElementById("typing");

let i = 0;

function escrever() {
    if (i < texto.length) {
        elemento.textContent += texto.charAt(i);
        i++;
        setTimeout(escrever, 80);
    }
}

escrever();

const tela = document.getElementById("codeTyping");

const linhas = [
  '<span class="pink">const</span> <span class="blue">user</span> = <span class="green">"Ingrid"</span>;',
  '<span class="pink">function</span> <span class="yellow">createUI</span>() {',
  '&nbsp;&nbsp;<span class="pink">return</span> <span class="green">"Frontend"</span>;',
  '}',
  '',
  '<span class="pink">import</span> React <span class="pink">from</span> <span class="green">"react"</span>;',
  '<span class="blue">useState</span>();',
  '',
  '<span class="pink">const</span> api = <span class="green">"/users"</span>;',
  '<span class="orange">fetch</span>(api);',
  '',
  '<span class="pink">export default</span> App;'
];

let indice = 0;

function atualizarCodigo(){
    if(!tela) return;
    tela.innerHTML = "";
    for(let i = 0; i < 8; i++){
        const linha = linhas[(indice + i) % linhas.length];
        tela.innerHTML += `<div class="code-line">${linha}</div>`;
    }
    indice++;
}

setInterval(atualizarCodigo, 700);
atualizarCodigo();

