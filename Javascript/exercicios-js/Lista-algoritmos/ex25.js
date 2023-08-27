// 25) [DESAFIO] Crie um programa que leia o tamanho de três segmentos de reta. 
// Analise seus comprimentos e diga se é possível formar um triângulo com essas 
// retas. Matematicamente, para três segmentos formarem um triângulo, o comprimento 
// de cada lado deve ser menor que a soma dos outros dois

const prompt = require('prompt-sync')({sigint: true})

let reta1 = parseFloat(prompt('Digite a reta 1: '))
let reta2 = parseFloat(prompt('Digite a reta 2: '))
let reta3 = parseFloat(prompt('Digite a reta 3: '))

if((reta1 < reta2 + reta3) && (reta2 < reta1 + reta3) && (reta3 < reta1 + reta2))
{
    console.log('é possivel formar um triangulo')
}
else{
    console.log('Não é possivel formar um triangulo') 
}