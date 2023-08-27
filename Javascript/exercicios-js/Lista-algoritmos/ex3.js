//3) Crie um programa que leia o nome e o salário de um funcionário, mostrando no 
// final uma mensagem.
// Ex:
// Nome do Funcionário: Maria do Carmo
// Salário: 1850,45
// O funcionário Maria do Carmo tem um salário de R$1850,45 em Junho

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  readline.question('Qual é o seu nome?\n', function(nome) {
    readline.question('Digite seu sálario:\n', function(valor) {
    console.log(`Olá ${nome}, seu salário é de R$${valor}`);
        readline.close();
      });    
  });


