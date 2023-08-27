// Faça um programa que leia 7 números inteiros e no final mostre o somatório 
// entre eles.

const prompt = require('prompt-sync')();

let num = parseFloat(prompt("Digite o número: "));
let soma = 0;

for (let i = 7; i <= num; i++) {
    soma += i;
}

console.log("A soma é:", soma);
