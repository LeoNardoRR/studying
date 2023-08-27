// 17) Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 
// 80Km/h, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba 
// o valor da multa, cobrando R$5 por cada Km acima da velocidade permitida.
const prompt = require('prompt-sync')({sigint: true})

let velocidade = parseFloat(prompt('Digite a velocidade do seu carro: '))

if (velocidade >= 80)
{
    let multa = velocidade * 5
    console.log(`A velocidade excedeu o limite e o valor da sua multa é no valor de = ${multa} `)
}
else{
    console.log(`Sua velocidade não excedeu o limite e você nõ foi multado!`)
}

//Fazer o ajuste para calcular a multa somente com os km acima do valor maximo