// 41) Desenvolva um programa que mostre na tela a seguinte contagem:
// 100 95 90 85 80 ... 0 Acabou!


let contador = 100;

while (contador >= 0) {
  console.log(contador);
  contador -= 5;
}

console.log("Acabou");
