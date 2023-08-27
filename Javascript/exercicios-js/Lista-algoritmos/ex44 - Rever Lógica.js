// 44) Crie um algoritmo que leia o valor inicial da contagem, o valor final e o 
// incremento, mostrando em seguida todos os valores no intervalo:
// Ex: Digite o primeiro Valor: 3
// Digite o último Valor: 10
// Digite o incremento: 2
// Contagem: 3 5 7 9 Acabou!

const prompt = require('prompt-sync')();

let ValorInicial = parseInt(prompt(`Digite o valor inicial: `))
let ValorFinal = parseInt(prompt(`Digite o valor final: `))
let incremento = parseInt(prompt(`Digite o incremento: `))

console.log("Contagem:");

for (let contador = ValorInicial; contador <= ValorFinal; contador += incremento) {
  console.log(contador);
}

console.log("Acabou!");
