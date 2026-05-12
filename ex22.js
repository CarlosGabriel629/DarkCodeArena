// Um produto possui imposto de 18%.
// Peça:
// Valor do produto
// Mostre:
// Valor do imposto
// Valor total

const readline = require('readline-sync')       

let valorProduto = readline.questionFloat('Digite o valor do produto: R$ ')

let valorImposto = valorProduto * 0.18
let valorTotal = valorProduto + valorImposto

console.log("======================= RESULTADO ==========================")

console.log(`Valor do imposto: R$ ${valorImposto.toFixed(2)}`)
console.log(`Valor total: R$ ${valorTotal.toFixed(2)}`)
