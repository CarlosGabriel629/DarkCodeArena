// Peça um número inteiro positivo.
// Calcule e exiba o fatorial desse número.

// Obs: Fatorial é o resultado da multiplicação desse número por todos os
// seus antecessores até chegar no 1

const readline = require('readline-sync')

let numero = readline.questionInt('Digite um numero inteiro positivo: ')

let fatorial = 1

for (let i = 1; i <= numero; i++)
    fatorial *= i  

console.log("======================= RESULTADO ==========================") 

console.log(`O fatorial de ${numero} é: ${fatorial}`) 