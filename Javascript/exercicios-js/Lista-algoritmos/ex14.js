// 14) A locadora de carros precisa da sua ajuda para cobrar seus serviços. Escreva 
// um programa que pergunte a quantidade de Km percorridos por um carro alugado e a 
// quantidade de dias pelos quais ele foi alugado. Calcule o preço total a pagar, 
// sabendo que o carro custa R$90 por dia e R$0,20 por Km rodado.

const prompt = require('prompt-sync')({sigint: true})

let valorKM = 0.20
let valorDia = 90

let km = parseFloat(prompt('Digite a quantidade de km percorridos: '))
let dias = parseFloat(prompt('Digite a quantidade de dias utilizados: '))

let custoKM = valorKM * km
let custoDia = valorDia * dias

let total = custoDia + custoKM

console.log(`O custo de quilometragem foi ${custoKM} e o custo dos dias foi ${custoDia} O total a pagar será igual a: ${total}`)