// 31) [DESAFIO] Crie um jogo de JoKenPo (Pedra-Papel-Tesoura)
const prompt = require('prompt-sync')({sigint: true})

let jogador1 = prompt('Jogador 1 digite a opção desejada: ')
let jogador2 = prompt('Jogador 2 digite a opção desejada: ')

if (jogador1 == 'Pedra' && jogador2 == 'Tesoura')
{
    console.log('O jogador 1 venceu')
}

else if(jogador1 == 'Papel' && jogador2 == 'Pedra')
{
    console.log('O jogador 1 venceu')
}

else if(jogador1 == 'Tesoura' && jogador2 == 'Papel')
{
    console.log('O jogador 1 venceu')
}

else if(jogador2 == 'Tesoura' && jogador1 == 'Papel')
{
    console.log('O jogador 2 venceu')
}

else if(jogador2 == 'Pedra' && jogador1 == 'Tesoura')
{
    console.log('O jogador 2 venceu')
}

else if(jogador2 == 'Papel' && jogador1 == 'Pedra')
{
    console.log('O jogador 2 venceu')
}

else
{
    console.log('Empate')
}