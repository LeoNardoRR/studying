// 5) Faça um programa que leia as duas notas de um aluno em uma matéria e mostre 
// na tela a sua média na disciplina.
// Ex: 
// Nota 1: 4.5
// Nota 2: 8.5
// A média entre 4.5 e 8.5 é igual a 6.5

const prompt = require('prompt-sync')({sigint: true})

let nota1 = 0
let nota2 = 0

nota1 = parseFloat(prompt('Digite a nota 1:'))
nota2 = parseFloat(prompt('Digite a nota 2:'))

let media = (nota1 + nota2) / 2 

console.log(`A média final é, ${media}`)