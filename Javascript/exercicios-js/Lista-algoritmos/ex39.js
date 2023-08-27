// 39) Faça um algoritmo que mostre na tela a seguinte contagem:
// 10 9 8 7 6 5 4 3 Acabou

const prompt = require('prompt-sync')({sigint: true})

let contador = 10;

while (contador >= 3) {
  console.log(contador);
  contador--;
}

console.log("Acabou");

