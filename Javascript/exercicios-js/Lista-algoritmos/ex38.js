// 38) Escreva um programa que mostre na tela a seguinte contagem: 
// 6 7 8 9 10 11 Acabou

const prompt = require('prompt-sync')({sigint: true})

let i = 6;
while (i < 12) {
  console.log(i);
  i++;
}

console.log("Acabou");
