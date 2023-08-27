// 19) Crie um algoritmo que leia o nome e as duas notas de um aluno, calcule a sua 
// média e mostre na tela. No final, analise a média e mostre se o aluno teve ou 
// não um bom aproveitamento (se ficou acima da média 7.0).
const prompt = require('prompt-sync')({sigint: true})

let nota1 = parseFloat(prompt('Digite a nota 1: '))
let nota2 = parseFloat(prompt('Digite a nota 2: '))

let media = (nota1 + nota2) / 2

if(media > 7.0)
{
    console.log(`Sua média foi ${media} e você teve um bom aproveitamento!`)
}
else
{
    console.log(`Sua média foi ${media} e você não teve um bom aproveitamento!`)
}