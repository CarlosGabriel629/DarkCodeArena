// Peça:
// Quantidade total de questões
// Quantidade de acertos
// Mostre:
// Percentual de acertos

const readline = require('readline-sync')

let totalQuestoes = readline.questionInt('Digite a quantidade total de questões: ')
let acertos = readline.questionInt('Digite a quantidade de acertos: ')

let percentualAcertos = (acertos / totalQuestoes) * 100

console.log("======================= RESULTADO ==========================")

console.log(`Percentual de acertos: ${percentualAcertos.toFixed(2)}%`)