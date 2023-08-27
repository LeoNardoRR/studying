// 18) Faça um programa que leia o ano de nascimento de uma pessoa, calcule a idade 
// dela e depois mostre se ela pode ou não votar
const prompt = require('prompt-sync')({sigint: true})

const anoAtual = 2023
let anoNascimento = parseInt(prompt('Digite o ano que você nasceu: '))

let idade = anoAtual - anoNascimento

if(idade < 18)
{
    console.log(`Sua idade é ${idade} e você não pode votar!`)
}
else
{
    console.log(`Sua idade é ${idade} e você pode votar!`)
}
