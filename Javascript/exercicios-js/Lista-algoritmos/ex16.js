// 16) [DESAFIO] Escreva um programa para calcular a redução do tempo de vida de um 
// fumante. Pergunte a quantidade de cigarros fumados por dias e quantos anos ele 
// já fumou. Considere que um fumante perde 10 min de vida a cada cigarro. Calcule 
// quantos dias de vida um fumante perderá e exiba o total em dias.

const prompt = require('prompt-sync')({sigint: true})

let cigarros = parseFloat(prompt('Digite a quantiade de cigarros que você fuma por dia: '))
let anos = parseFloat(prompt('Digite a quantidade de anos que você é fumante: '))

let minutos = cigarros * 10
let horas = (minutos / 60)
let dias = horas / 24
let anosEmDias = anos * 365
let total = dias * anosEmDias

console.log(`A quantidade de dias perdidos é igual a ${total}`)