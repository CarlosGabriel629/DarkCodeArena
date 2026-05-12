// Crie um programa que peça um número inteiro e exiba a tabuada desse
// número de 1 até 10.

const readline = require('readline-sync')

let numero = readline.questionInt('Digite um numero inteiro: ')

console.log("======================= TABUADA ==========================")

for (let i = 1; i <= 10; i++) {
  const resultado = numero * i
  console.log(`${numero} x ${i} = ${resultado}`)
}