// Um vendedor recebe 5% de comissão sobre suas vendas.
// Peça:
// Valor total vendido
// Mostre:
// Valor da comissão

const readline = require('readline-sync')

let valorVendido = readline.questionFloat('Digite o valor total vendido: ')

let comissao = valorVendido * 0.05

console.log("======================= RESULTADO ==========================")

console.log(`Valor da comissão: R$ ${comissao.toFixed(2)}`) 
