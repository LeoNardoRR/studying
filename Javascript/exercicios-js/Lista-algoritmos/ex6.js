// 6) Faça um programa que leia um número inteiro e mostre o seu antecessor e seu 
// sucessor.
// Ex: 
// Digite um número: 9
// O antecessor de 9 é 8
// O sucessor de 9 é 10

const prompt = require('prompt-sync')({sigint: true})

let valor = 0

valor = parseFloat(prompt('Digite o valor: '))

let antecessor = valor - 1
let sucessor = valor + 1

console.log(`Para o número digitado o antecessor é ${antecessor} e o sucessor é ${sucessor}`)
