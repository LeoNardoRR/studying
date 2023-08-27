// 35) Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O 
// aluguel de um carro custa R$90 por dia para carro popular e R$150 por dia para 
// carro de luxo. Além disso, o cliente paga por Km percorrido. Faça um programa
// que leia o tipo de carro alugado (popular ou luxo), quantos dias de aluguel e 
// quantos Km foram percorridos. No final mostre o preço a ser pago de acordo com a 
// tabela a seguir:
//  - Carros populares (aluguel de R$90 por dia)
//  - Até 100Km percorridos: R$0,20 por Km
//  - Acima de 100Km percorridos: R$0,10 por Km
//  - Carros de luxo (aluguel de R$150 por dia)
//  - Até 200Km percorridos: R$0,30 por Km
//  - Acima de 200Km percorridos: R$0,25 por Km
const prompt = require('prompt-sync')({sigint: true})

let aluguelPopular = 90
let aluguelLuxo = 150
let valorTotal = 0

let cliente = prompt('Digite a opção de aluguel que deseja (Luxo o Popular): ')
let dias = parseInt(prompt('Digite a quantidade de dias que você ficou com o carro: '))
let km = parseInt(prompt('Digite a quantidade de km percorrido: '))

if(cliente == 'Popular' && km < 100){
    let kmpopular = km * 0.20
    valorTotal = valorTotal + kmpopular
    console.log(`O preço a ser pago por km é igual a ${kmpopular}`)
}
else if(cliente == 'Popular' && km > 100)
{
    let kmpopular = km * 0.10
    valorTotal = valorTotal + kmpopular
    console.log(`O preço a ser pago por km é igual a ${kmpopular}`)
}
else if(cliente == 'Luxo' && km < 200){
    let kmluxo = km * 0.30
    valorTotal = valorTotal + kmluxo
    console.log(`O preço a ser pago por km é igual a ${kmluxo}`)
}
else if(cliente == 'Luxo' && km > 200)
{
    let kmluxo = km * 0.25
    valorTotal = valorTotal + kmluxo
    console.log(`O preço a ser pago por km é igual a ${kmluxo}`)
}
else{
    console.log(`Opção invalida`)
}

if(cliente == 'Popular')
{
    let total = dias * aluguelPopular
    valorTotal = valorTotal + total
    console.log(`O valor a ser pago de aluguel será ${total}`)
}

else
{
    let total = dias * aluguelLuxo
    valorTotal = valorTotal + total
    console.log(`O valor a ser pago de aluguel será ${total}`)
}

console.log(`O total a ser pago é ${valorTotal}`)
