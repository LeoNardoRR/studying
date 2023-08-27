// 37) Uma empresa precisa reajustar o salário dos seus funcionários, dando um 
// aumento de acordo com alguns fatores. Faça um programa que leia o salário atual, 
// o gênero do funcionário e há quantos anos esse funcionário trabalha na empresa. 
// No final, mostre o seu novo salário, baseado na tabela a seguir:
// - Mulheres
//  - menos de 15 anos de empresa: +5%
//  - de 15 até 20 anos de empresa: +12%
//  - mais de 20 anos de empresa: +23%
// - Homens
//  - menos de 20 anos de empresa: +3%
//  - de 20 até 30 anos de empresa: +13%
//  - mais de 30 anos de empresa: +25

const prompt = require('prompt-sync')({sigint: true})

let salario = parseFloat(prompt(`Digite o seu salário: `))
let sexo = prompt(`Você é Homem ou Mulher? `)
let ano = parseFloat(prompt(`A quantos anos você trabalha na empresa? `))

if (sexo == 'Mulher' || 'mulher' && ano < 15){
    let novoSalario = salario + salario * 0.5
    console.log(`Seu novo salário é: ${novoSalario}`)
}

else if (sexo == 'Mulher' || 'mulher' && ano > 15 <=20){
    let novoSalario =salario + salario * 0.12
    console.log(`Seu novo salário é: ${novoSalario}`)
}

else if (sexo == 'Mulher' || 'mulher' && ano > 20){
    let novoSalario =salario + salario * 0.23
    console.log(`Seu novo salário é: ${novoSalario}`)
}

///////////////////////////////////////////////////////////

if (sexo == 'Homem' || 'homem' && ano < 20){
    let novoSalario2 = salario + salario * 0.3
    console.log(`Seu novo salário é: ${novoSalario2}`)
}

else if (sexo == 'Homem' || 'homem' && ano > 20 <=30){
    let novoSalario2 =salario + salario * 0.13
    console.log(`Seu novo salário é: ${novoSalario2}`)
}

else if (sexo == 'Homem' || 'homem' && ano > 30){
    let novoSalario2 =salario + salario * 0.25
    console.log(`Seu novo salário é: ${novoSalario2}`)
}

else{
    console.log(`Inválido`)
}