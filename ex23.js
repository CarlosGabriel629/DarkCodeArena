// Leia:
// Quantidade de homens
// Quantidade de mulheres
// Mostre:
// Percentual de homens
// Percentual de mulheres
const readline = require('readline-sync')

let quantidadeHomens = readline.questionInt('Digite a quantidade de homens: ')
let quantidadeMulheres = readline.questionInt('Digite a quantidade de mulheres: ')

let totalPessoas = quantidadeHomens + quantidadeMulheres
let percentualHomens = (quantidadeHomens / totalPessoas) * 100
let percentualMulheres = (quantidadeMulheres / totalPessoas) * 100

console.log("======================= RESULTADO ==========================")

console.log(`Percentual de homens: ${percentualHomens.toFixed(2)}%`)
console.log(`Percentual de mulheres: ${percentualMulheres.toFixed(2)}%`)