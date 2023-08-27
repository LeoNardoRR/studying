// 36) Um programa de vida saudável quer dar pontos atividades físicas que podem 
// ser trocados por dinheiro. O sistema funciona assim:
//  - Cada hora de atividade física no mês vale pontos
//  - até 10h de atividade no mês: ganha 2 pontos por hora
//  - de 10h até 20h de atividade no mês: ganha 5 pontos por hora
//  - acima de 20h de atividade no mês: ganha 10 pontos por hora
//  - A cada ponto ganho, o cliente fatura R$0,05 (5 centavos) 
// Faça um programa que leia quantas horas de atividade uma pessoa teve por mês, 
// calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.
const prompt = require('prompt-sync')({sigint: true})

let horas = parseInt(prompt(`Digite a quantidade de horas que você treinou esse mês: `))

if(horas <= 10){
    let pontos = horas * 2
    let dinheiro = pontos * 0.05
    console.log(`Sua quantidade de pontos é de: ${pontos} e você ganhou R$${dinheiro}`)
}

else if(horas > 10 && horas <=20){
    let pontos = horas * 5
    let dinheiro = pontos * 0.05
    console.log(`Sua quantidade de pontos é de: ${pontos} e você ganhou R$${dinheiro}`)
}

else if(horas > 20){
    let pontos = horas * 20
    let dinheiro = pontos * 0.05
    console.log(`Sua quantidade de pontos é de: ${pontos} e você ganhou R$${dinheiro}`)
}

else{
    console.log(`Opção inválida!`)
}