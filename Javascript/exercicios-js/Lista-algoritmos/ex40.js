// 40) Crie um aplicativo que mostre na tela a seguinte contagem:
// 0 3 6 9 12 15 18 Acabou!

const prompt = require('prompt-sync')();

let contador = 18;

while (contador >= 0) {
  console.log(contador);
  contador -= 3;
}

console.log("Acabou");
