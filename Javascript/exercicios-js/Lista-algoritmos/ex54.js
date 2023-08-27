// 54) Desenvolva um aplicativo que leia o peso e a altura de 7 pessoas, mostrando 
// no final:
// a) Qual foi a média de altura do grupo
// b) Quantas pessoas pesam mais de 90Kg
// c) Quantas pessoas que pesam menos de 50Kg tem menos de 1.60m
// d) Quantas pessoas que medem mais de 1.90m pesam mais de 100Kg

const prompt = require('prompt-sync')({sigint: true})

let pesoTotal = 0
let alturaTotal = 0

for (var contador = 1; contador <= 2; contador++)
{
    console.log(contador)

    let peso = parseFloat(prompt('Digite seu peso: '))
    let altura = parseFloat(prompt('Digite sua altura: '))

    pesoTotal += peso
    alturaTotal = alturaTotal + altura

}

console.log(`O peso de todos as pessoas é igual a: ${pesoTotal}`)
console.log(`A altura de todos as pessoas é igual a: ${alturaTotal}`)