// O programa deverá analisar o valor digitado e exibir:
// "Número positivo"

// → caso o número seja maior que zero.

// "Número negativo"

// → caso o número seja menor que zero.

// "Zero"
// → caso o valor digitado seja exatamente zero.

const readline = require('readline-sync')

let numero = readline.questionInt('Digite um numero: ')

console.log("======================= ANÁLISE DO NÚMERO ==========================")

if (numero > 0) {
  console.log('Número positivo')
} else if (numero < 0) {
  console.log('Número negativo')
} else {
  console.log('Zero')
}                           
