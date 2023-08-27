// 24) Faça um algoritmo que pergunte a distância que um passageiro deseja 
// percorrer em Km. Calcule o preço da passagem, cobrando R$0.50 por Km para 
// viagens até 200Km e R$0.45 para viagens mais longas.
const prompt = require('prompt-sync')({ sigint: true });

let distancia = parseFloat(prompt('Digite a distância que você quer porcorrer, em Km: '))

if(distancia < 200){
    let preco = distancia * 0.50
    console.log(`O valor da sua passagem é igual a ${preco}`)
}
else if(distancia > 200){
    let preco = distancia * 0.45
    console.log(`O valor da sua passagem é igual a ${preco}`)
}