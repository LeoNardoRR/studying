// 43) Desenvolva um algoritmo que mostre uma contagem regressiva de 30 até 1, 
// marcando os números que forem divisíveis por 4, exatamente como mostrado abaixo:
// 30 29 [28] 27 26 25 [24] 23 22 21 [20] 19 18 17 [16]..

const prompt = require('prompt-sync')();

let contador = 30;
let resultado = '';

while (contador >= 0) {
  if (contador % 4 === 0) {
    resultado += `[${contador}] `;
  } else {
    resultado += contador + ' ';
  }

  contador--;
}

console.log(resultado.trim()); // Imprime o resultado em uma linha
console.log("Acabou");
