// 8) Desenvolva um programa que leia uma distância em metros e mostre os valores 
// relativos em outras medidas.
// Ex: 
// Digite uma distância em metros: 85.72
// A distância de 85.7m corresponde a:
// 0.18572Km
// 1.8572Hm
// 18.572Dam
// 1857.2dm
// 18572.0cm
// 185720.0mm

const prompt = require('prompt-sync')({sigint: true})

let metros = parseFloat(prompt('Digite a distância em metros: '))

let km = metros / 1000
let hm = metros / 100
let dam = metros / 10
let dm = metros * 10
let cm = metros * 100
let mm = metros * 1000

console.log(`A distancia digitada corresponde a: \n${km} Quilômetros \n${hm} Hectômetros \n${dam}Decâmetros \n${dm} Decímetros \n${cm} Centímetros \n${mm} Milímetros`)