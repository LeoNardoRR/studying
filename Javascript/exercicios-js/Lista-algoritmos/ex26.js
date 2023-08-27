// 26) Escreva um algoritmo que leia dois números inteiros e compare-os, mostrando 
// na tela uma das mensagens abaixo:
//  - O primeiro valor é o maior
//  - O segundo valor é o maior
//  - Não existe valor maior, os dois são iguais

const prompt = require('prompt-sync')({sigint: true})

let valor1 = parseInt(prompt(`Digite o valor 1: `))
let valor2 = parseInt(prompt(`Digite o valor 2: `))

if(valor1 > valor2){
    console.log(`O primeiro valor é o maior`)
}

else if(valor1 < valor2){
    console.log(`O segundo valor é o maior`)
}

else if(valor1 == valor2 || valor2 == valor1){
    console.log(`Não existe valor maior, os dois são iguais`)
}