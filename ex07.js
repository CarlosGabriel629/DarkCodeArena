// Peça ao usuário para digitar 5 números inteiros.
// Ao final, o programa deverá mostrar:
// A soma de todos os números digitados.

const readline = require('readline-sync')

let soma = 0

for (let i = 1; i <= 5; i++) {
  const numero = readline.questionInt(`Digite o ${i}º número inteiro: `)
  soma += numero
}

console.log("======================= RESULTADO ==========================")
console.log(`A soma de todos os números digitados é: ${soma}`)