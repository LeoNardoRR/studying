// 4) Desenvolva um algoritmo que leia dois números inteiros e mostre o somatório 
// entre eles.
// Ex:
// Digite um valor: 8
// Digite outro valor: 5
// A soma entre 8 e 5 é igual a 13.

const prompt = require('prompt-sync')({sigint:true})
let num1 = 0
let num2 = 0
let num3 = 0

num1 = parseInt(prompt('Digite o valor 1:'))
num2 = parseInt(prompt('Digite o valor 2:'))
num3 = parseInt(prompt('Digite o valor 3:'))

let soma = num1 + num2 + num3

console.log(`A soma dos valores é, ${soma}`)