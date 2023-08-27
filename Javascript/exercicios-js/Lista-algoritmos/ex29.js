// 29) Desenvolva um programa que leia o nome de um funcionário, seu salário, 
// quantos anos ele trabalha na empresa e mostre seu novo salário, reajustado de 
// acordo com a tabela a seguir:
//  - Até 3 anos de empresa: aumento de 3%
//  - entre 3 e 10 anos: aumento de 12.5%
//  - 10 anos ou mais: aumento de 20%
const prompt = require('prompt-sync')({sigint: true})

let salario = parseFloat(prompt(`Digite seu sálario: `))
let anos = parseFloat(prompt(`A quantos anos você trabalha na empresa? `))

if(anos < 3){
    let novoSalario = (salario * 0.03) + salario 
    console.log(`Seu novo salário é igual a: ${novoSalario}`)
}

else if(anos >= 3 && anos < 10){
    let novoSalario = (salario * 0.12) + salario 
    console.log(`Seu novo salário é igual a: ${novoSalario}`)
}

else if(anos > 10){
    let novoSalario = (salario * 0.2) + salario 
    console.log(`Seu novo salário é igual a: ${novoSalario}`)
}

