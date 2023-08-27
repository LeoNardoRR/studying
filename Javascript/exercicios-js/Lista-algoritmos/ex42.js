// 42) Faça um algoritmo que pergunte ao usuário um número inteiro e positivo 
// qualquer e mostre uma contagem até esse valor:
// Ex: Digite um valor: 35
// Contagem: 1 2 3 4 5 6 7 ... 33 34 35 Acabou!

const prompt = require('prompt-sync')();

// Solicita ao usuário um número
const numero = parseInt(prompt('Digite um número: '));

let contador = 0;

while (contador <= numero) {
  console.log(contador);
  contador++;
}

console.log("Acabou!");
