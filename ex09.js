// Peça ao usuário para digitar 3 números inteiros.
// O programa deverá mostrar:
// Qual é o maior número digitado.

const readline = require('readline-sync')

let maiorNumero = Number.NEGATIVE_INFINITY

for (let i = 1; i <= 3; i++) {
  const numero = readline.questionInt(`Digite o ${i}º número inteiro: `)
  if (numero > maiorNumero) {
    maiorNumero = numero
  }
}

console.log("======================= RESULTADO ==========================")

console.log(`O maior número digitado é: ${maiorNumero}`)