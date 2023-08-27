// 33) Escreva um programa para aprovar ou não o empréstimo bancário para a compra 
// de uma casa. O programa vai perguntar o valor da casa, o salário do comprador e 
// em quantos anos ele vai pagar. Calcule o valor da prestação mensal, sabendo que 
// ela não pode exceder 30% do salário ou então o empréstimo será negado.

const prompt = require('prompt-sync')({ sigint: true });

let valor = parseFloat(prompt(`Digite o valor da casa: `))
let salario = parseFloat(prompt(`Digite o seu salário: `))
let anos = parseFloat(prompt(`Digite a quantidade de anos que pretende pagar a casa: `))

let salarioPorcetagem = salario * 30 / 100
let meses = anos * 12
let prestMensal = valor / meses

if(prestMensal > salarioPorcetagem){
    console.log(`30% do seu salário corresponde a ${salarioPorcetagem} e sua prestação mensal seria de: ${prestMensal}, portanto maior que 30% do seu salário. EMPRESTIMO NEGADO!`)
}

else if (prestMensal < salarioPorcetagem){
    console.log(`30% do seu salário corresponde a ${salarioPorcetagem} e sua prestação mensal seria de: ${prestMensal}, portanto menor que 30% do seu salário. EMPRESTIMO APROVADO!`)
}

else {
    (`Erro!`)
}


