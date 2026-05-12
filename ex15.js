// Peça:
// Valor da conta
// Calcule:
// Gorjeta de 10%
// Valor total a pagar

const readline = require('readline-sync')

let valorConta = readline.questionFloat('Digite o valor da conta: ')

let gorjeta = valorConta * 0.10
let valorTotal = valorConta + gorjeta

console.log("======================= RESULTADO ==========================")

console.log(`Valor da gorjeta: R$ ${gorjeta.toFixed(2)}`)
console.log(`Valor total a pagar: R$ ${valorTotal.toFixed(2)}`)