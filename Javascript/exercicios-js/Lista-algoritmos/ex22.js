// 22) Escreva um programa que leia o ano de nascimento de um rapaz e mostre a sua 
// situação em relação ao alistamento militar.
//  - Se estiver antes dos 18 anos, mostre em quantos anos faltam para o 
// alistamento.
//  - Se já tiver depois dos 18 anos, mostre quantos anos já se passaram do 
// alistamento

const prompt = require('prompt-sync')({sigint: true});

let alistar = 18
let anoAtual = 2023
let nascimento = parseInt(prompt(`Digite o ano que você nasceu: `))
let idade = anoAtual - nascimento
let falta = alistar - idade 

if(idade <= alistar){
console.log(` Você tem ${idade} e faltam ${falta} anos para você se alistar!`)
}
else if (idade >= alistar){
    console.log(` Você tem ${idade} e deveria ter se alistado a ${falta} anos atrás!`)
}