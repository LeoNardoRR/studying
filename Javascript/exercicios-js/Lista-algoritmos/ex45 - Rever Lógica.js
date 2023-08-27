// O programa acima vai ter um problema quando digitarmos o primeiro valor 
// maior que o último. Resolva esse problema com um código que funcione em qualquer 
// situação

const prompt = require('prompt-sync')()

let primeiroValor = parseInt(prompt("Digite o primeiro Valor: "));
let ultimoValor = parseInt(prompt("Digite o último Valor: "));
let incremento = parseInt(prompt("Digite o incremento: "));

console.log("Contagem:");

if (primeiroValor <= ultimoValor) {
  for (let i = primeiroValor; i <= ultimoValor; i += incremento) {
    console.log(i);
  }
} else {
  for (let i = primeiroValor; i >= ultimoValor; i -= incremento) {
    console.log(i);
  }
}

console.log("Acabou!");


