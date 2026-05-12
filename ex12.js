// Peça 10 números ao usuário.
// Ao final:
// Mostre quantos números positivos foram digitados.

const readline = require('readline-sync')

let contadorPositivos = 0

for (let i = 1; i <= 10; i++) {
  const numero = readline.questionInt(`Digite o ${i}º número: `)
  if (numero > 0) {
    contadorPositivos++
  }
}

console.log("======================= RESULTADO ==========================")

console.log(`Quantidade de números positivos digitados: ${contadorPositivos}`)  