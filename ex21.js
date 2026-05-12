// Uma empresa deseja vender um produto com 35% de lucro.
// Peça:
// Custo do produto
// Mostre:
// Preço de venda 

const readline = require('readline-sync')

let custoProduto = readline.questionFloat('Digite o custo do produto: R$ ')

let precoVenda = custoProduto * 1.35

console.log("======================= RESULTADO ==========================")

console.log(`Preço de venda: R$ ${precoVenda.toFixed(2)}`)  