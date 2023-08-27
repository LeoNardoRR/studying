// 27) Crie um programa que leia duas notas de um aluno e calcule a sua média, 
// mostrando uma mensagem no final, de acordo com a média atingida:
//  - Média até 4.9: REPROVADO
//  - Média entre 5.0 e 6.9: RECUPERAÇÃO
//  - Média 7.0 ou superior: APROVADO

const prompt = require('prompt-sync')({sigint: true})

let nota1 = parseInt(prompt(`Digite sua primeira nota: `))
let nota2 = parseInt(prompt(`Digite sua segunda nota: `))
let nota3 = parseInt(prompt(`Digite sua terceira nota: `))

let media = nota1 + nota2 + nota3 / 3

if(media <= 4.9){
    console.log(`REPROVADO`)
}
else if(media >= 5.0 <= 6.9){
    console.log(`RECUPERAÇÃO`)
}
else if(media > 7.0){
    console.log(`APROVADO`)
}