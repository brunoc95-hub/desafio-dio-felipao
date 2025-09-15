/*Desafio Java - Felipão DIO
Dever ser usado - Variáveis, operadores, laços de repetição e estruturas de decisão

Objetivo - crie um variáveis para armazenar o nome e a quantidade de experiencia (XP) de um heroi, depois utilize a estrutura de decisão para apresentar alguma das mensagens abaixo:
Se XP for menor do que 1.000 = ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata Ouro
Se XP for entre 5.001 e 6.000 = Prata Ouro
Se XP for entre 6.001 e 8.000 = Platina Diamante
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000 = Imoral
Se XP for menor ou igual a 10.001 = Radiante

Saida - ao final deve exibir a seguinte mensagem
o heroi de nome xx está no nível xx
*/

//Criação das vaiáveis
let nomeHeroi = "Felipão";
let xp = 7500;

//Estrutura de Decisão
if (xp < 1000) {
    nivel = "Ferro"}
else if (xp >= 1001 && xp <=2000){
    nivel = "Bronze"
}
else if (xp >= 2001 && xp <=5000){
    nivel = "Prata Ouro"
}
else if (xp >= 5001 && xp <=6000){
    nivel = "Ouro"
}
else if (xp >= 6001 && xp <=8000){
    nivel = "Platina Diamante"
}
else if (xp >= 8001 && xp <=9000){
    nivel = "Ascendente"
}
else if (xp >= 9001 && xp <=10000){
    nivel = "Imortal"
}
else {
    nivel = "Radiante";
} 


//Execução
console.log ("O Herói de nome" {nomeHeroi} "está no nível" {nivel})

