// Uma loja oferece 8% de cashback.
// Peça:
// Valor da compra
// Mostre:
// Valor do cashback

const readline = require('readline-sync')

let valorCompra = readline.questionFloat('Digite o valor da compra: R$ ')

let cashback = valorCompra * 0.08

console.log("======================= RESULTADO ==========================")

console.log(`Valor do cashback: R$ ${cashback.toFixed(2)}`)