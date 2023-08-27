// 9) Faça um algoritmo que leia quanto dinheiro uma pessoa tem na carteira (em R$) 
// e mostre quantos dólares ela pode comprar. Considere US$1,00 = R$3,45.

const prompt = require('prompt-sync')({sigint: true})

let dinheiro = 0

dinheiro = parseFloat(prompt('Digite o que tem na sua carteira: '))

const dolar = dinheiro * 3.45

console.log(`O valor na sua carteira em dólar é ${dolar}`)

let produtoValorDolar = 100

if (dolar < produtoValorDolar){
    console.log(`Você não pode comprar esse produto`)   
}
else{
    console.log(`Você pode comprar esse produto`)   
}
