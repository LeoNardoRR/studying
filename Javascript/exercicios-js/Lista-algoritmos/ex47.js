// 47) Desenvolva um aplicativo que mostre na tela o resultado da expressão 500 + 
// 450 + 400 + 350 + 300 + ... + 50 + 0

const prompt = require('prompt-sync')();

let soma = 0;

for (let num = 0; num <= 500; num += 50) {
    soma +=num;
}

console.log("A soma é:", soma);
