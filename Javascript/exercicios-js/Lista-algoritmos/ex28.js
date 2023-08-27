// 28) Faça um programa que leia a largura e o comprimento de um terreno 
// retangular, calculando e mostrando a sua área em m². O programa também 
// devemostrar a classificação desse terreno, de acordo com a lista abaixo:
//  - Abaixo de 100m² = TERRENO POPULAR
//  - Entre 100m² e 500m² = TERRENO MASTER
//  - Acima de 500m² = TERRENO VIP
const prompt = require('prompt-sync')({sigint: true})

let largura = parseFloat(prompt(`Digite a largura do terreno: `))
let comprimento = parseFloat(prompt(`Digite o comprimento do terreno: `))

let area = largura * comprimento

if(area < 100){
    console.log(`Seu terreno tem uma área de ${area}, sendo assim um TERRENO POPULAR`)
}
else if(area >= 100 && area < 500){
    console.log(`Seu terreno tem uma área de ${area}, sendo assim um TERRENO MASTER`)
}
else if(area > 500){
    console.log(`Seu terreno tem uma área de ${area}, sendo assim um TERRENO VIP`)
}