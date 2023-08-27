// 12) Crie um programa que leia o preço de um produto, calcule e mostre o seu 
// PREÇO PROMOCIONAL, com 5% de desconto
const prompt = require('prompt-sync')({sigint: true})

let produtos = parseFloat(prompt('Digite o valor do produto: '))

let desconto = produtos * 0.95

console.log(`O valor do produto com desconto é: ${desconto}`)