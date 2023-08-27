// 46) Crie um programa que calcule e mostre na tela o resultado da soma entre 6 + 
// 8 + 10 + 12 + 14 + ... + 98 + 100

const prompt = require('prompt-sync')();

let soma = 0;

for (let num = 6; num <= 100; num += 2) {
    soma += num;
}

console.log("A soma é:", soma);
