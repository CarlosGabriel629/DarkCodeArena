// Um vendedor atingiu uma porcentagem da meta.
// Peça:
// Valor da meta
// Valor vendido
// Informe:
// Quantos % da meta foram atingidos.

const readline = require('readline-sync')

let valorMeta = readline.questionFloat('Digite o valor da meta: R$ ')
let valorVendido = readline.questionFloat('Digite o valor vendido: R$ ')

let porcentagemAtingida = (valorVendido / valorMeta) * 100

console.log("======================= RESULTADO ==========================")

console.log(`Porcentagem da meta atingida: ${porcentagemAtingida.toFixed(2)}%`) 