// 10) Faça um algoritmo que leia a largura e altura de uma parede, calcule e 
// mostre a área a ser pintada e a quantidade de tinta necessária para o serviço, 
// sabendo que cada litro de tinta pinta uma área de 2metros quadrados.

const prompt = require('prompt-sync')({sigint: true})

let largura = 0
let altura = 0

largura = parseFloat(prompt('Digite a largura: '))
altura = parseFloat(prompt('Digite a altura: '))

let area = largura * altura

console.log(`A área da parede é ${area}`)   

let litros = area / 2

console.log(`A quantidade de tinta que sera usada é ${litros}`)   
