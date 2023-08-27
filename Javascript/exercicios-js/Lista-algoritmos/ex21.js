// 21) Faça um algoritmo que leia um determinado ano e mostre se ele é ou não 
// BISSEXTO.

const prompt = require('prompt-sync')({sigint: true});

let ano = parseInt(prompt('Digite um ano: '));

if (ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0)) {
  console.log('O ano é bissexto!');
} else {
  console.log('O ano não é bissexto!');
}
