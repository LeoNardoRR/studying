// 11) Desenvolva uma lógica que leia os valores de A, B e C de uma equação do 
// segundo grau e mostre o valor de Delta.
const prompt = require('prompt-sync')({sigint: true})

let A = parseFloat(prompt('Digite o valor de A: '))
let B = parseFloat(prompt('Digite o valor de B: '))
let C = parseFloat(prompt('Digite o valor de C: '))

let delta = B*B - 4*A*C

console.log(`O valor de delta é: ${delta}`)