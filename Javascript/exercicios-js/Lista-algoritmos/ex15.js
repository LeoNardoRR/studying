// 15) Crie um programa que leia o número de dias trabalhados em um mês e mostre o 
// salário de um funcionário, sabendo que ele trabalha 8 horas por dia e ganha R$25 
// por hora trabalhada.
const prompt = require('prompt-sync')({sigint: true})

let dias = parseFloat(prompt('Digite a quantidade de dias que você trabalhou esse mês: '))

const horas = 8
const valor = 25

let diaTotal = horas * valor
let salarioTotal = diaTotal * dias

console.log(`O seu salário mensal é igual a: R$${salarioTotal}`)