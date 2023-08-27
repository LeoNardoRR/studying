// 30) [DESAFIO] Refaça o algoritmo 25, acrescentando o recurso de mostrar que tipo 
// de triângulo será formado: 
//  - EQUILÁTERO: todos os lados iguais
//  - ISÓSCELES: dois lados iguais
//  - ESCALENO: todos os lados diferentes

const prompt = require('prompt-sync')({ sigint: true });

let reta1 = parseFloat(prompt('Digite a reta 1: '));
let reta2 = parseFloat(prompt('Digite a reta 2: '));
let reta3 = parseFloat(prompt('Digite a reta 3: '));

if (reta1 === reta2 && reta2 === reta3) {
    console.log('EQUILÁTERO: todos os lados iguais');
} else if (reta1 !== reta2 && reta2 !== reta3 && reta1 !== reta3) {
    console.log('ESCALENO: todos os lados diferentes');
} else {
    console.log('ISÓSCELES: dois lados iguais');
}
