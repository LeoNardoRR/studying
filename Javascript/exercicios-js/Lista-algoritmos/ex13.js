// 13) Faça um algoritmo que leia o salário de um funcionário, calcule e mostre o 
// seu novo salário, com 15% de aumento.

const prompt = require('prompt-sync')({sigint: true})

let salario = parseFloat(prompt('Digite seu salário: '))

let salarioAjustado = salario * 0.15 + salario

console.log(`Seu novo salário é igual a: ${salarioAjustado}`)