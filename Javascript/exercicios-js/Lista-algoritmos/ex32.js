// 32) [DESAFIO] Crie um jogo onde o computador vai sortear um número entre 1 e 5 o 
// jogador vai tentar descobrir qual foi o valor sorteado.

const prompt = require('prompt-sync')({ sigint: true });

//A função getRandomInt() recebe dois parâmetros: min e max. 
// Esses parâmetros representam os valores mínimo e máximo do intervalo de 
// números inteiros que você deseja gerar.

function getRandomInt(min, max) {
    min = Math.ceil(min); // Essa função éS usada para arredondar o valor mínimo para cima, garantindo que seja um número inteiro. 
    max = Math.floor(max); //Essa função arredonda o número decimal para baixo, garantindo que seja um número inteiro.
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // randoInt = retorna numeros inteiros
  let randomInt = getRandomInt(1, 5);

  //console.log(`${randomInt}`)
  
let jogada = parseInt(prompt(`Digite um número de 1 a 5: `))

if (jogada == randomInt){
    console.log(`PARABÉÉÉÉNS! Você acertou.`)
}
else{
    console.log(`Sinto muito, número errado!.`)   
}
