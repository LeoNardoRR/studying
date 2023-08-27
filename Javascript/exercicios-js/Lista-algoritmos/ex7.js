// 7) Crie um algoritmo que leia um número real e mostre na tela o seu dobro e a 
// sua terça parte.
// Ex: 
// Digite um número: 3.5
// O dobro de 3.5 é 7.0
// A terça parte de 3.5 é 1.16666

const prompt = require('prompt-sync')({sigint: true})

let numero = 0

numero = parseFloat(prompt('Digite o valor: '))

let dobro = numero * 2
let terca = numero / 3

console.log(`O dobro de ${numero} é ${dobro} e a terça parte é ${terca}`)
