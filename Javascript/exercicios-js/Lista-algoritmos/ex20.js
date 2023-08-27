// 20) Desenvolva um programa que leia um número inteiro e mostre se ele é PAR ou 
// ÍMPAR
const prompt = require('prompt-sync')({sigint: true})

let num = parseInt(prompt('Digite um número: '));

if (num % 2 === 0) {
  console.log(`O número digitado é par.`);
} else if (num % 2 === 1) {
  console.log(`O número digitado é ímpar.`);
} else {
  console.log(`Valor inválido.`);
}
