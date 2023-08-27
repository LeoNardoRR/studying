// 23) Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar descontos 
// para todos, mas especialmente para mulheres. Faça um programa que leia nome, 
// sexo e o valor das compras do cliente e calcule o preço com desconto. Sabendo 
// que:
//  - Homens ganham 5% de desconto
//  - Mulheres ganham 13% de desconto
const prompt = require('prompt-sync')({ sigint: true });

let nome = prompt(`Digite seu nome: `);
let sexo = prompt(`Digite se você é homem ou mulher: `);
let valor = parseInt(prompt(`Digite o valor da sua compra: `));

if (sexo == 'homem') {
  let desconto = (5 * valor) / 100
  let totalHomem = valor - desconto
  console.log(`Boa tarde ${nome}, como hoje é dia da mulher, temos um desconto especial para todos. Sua compra foi de ${valor} e você teve um desconto de ${desconto} 
  totalizando ${totalHomem}.`);
} else if (sexo == 'mulher') {
  let desconto = (13 * valor) / 100
  let totalMulher = valor - desconto
  console.log(`Boa tarde ${nome}, como hoje é dia da mulher, temos um desconto especial para todos. Sua compra foi de ${valor} e você teve um desconto de ${desconto} totalizando 
  ${totalMulher}.`);
} else {
  console.log(`Inválido`);
}