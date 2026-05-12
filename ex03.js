// Uma loja oferece descontos de acordo com o valor da compra:
// Compras acima de R$ 500 → desconto de 20%
// Compras entre R$ 200 e R$ 500 → desconto de 10%
// Compras abaixo de R$ 200 → sem desconto
// Crie um programa que leia o valor da compra e informe:
// 1.O valor original
// 2.O percentual de desconto
// 3.O valor final da compra após o desconto

const readline = require('readline-sync')

let valorCompra = readline.questionFloat('Digite o valor da compra: R$ ')

let percentualDesconto = 0

if (valorCompra > 500) {
  percentualDesconto = 20
} else if (valorCompra >= 200) {
  percentualDesconto = 10
}

let valorDesconto = (valorCompra * percentualDesconto) / 100
let valorFinal = valorCompra - valorDesconto

console.log("======================= RESULTADOS ==========================")

console.log(`Valor original: R$ ${valorCompra.toFixed(2)}`)
console.log(`Percentual de desconto: ${percentualDesconto}%`)
console.log(`Valor final da compra após o desconto: R$ ${valorFinal.toFixed(2)}`)








