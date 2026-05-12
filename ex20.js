// Leia um salário:

// Até R$ 2000 → aumento de 10%
// Acima de R$ 2000 → aumento de 5%
// Mostre:
// Novo salário

const readline = require('readline-sync')

let salario = readline.questionFloat('Digite o salário: R$ ')

let novoSalario

if (salario <= 2000) {
  novoSalario = salario * 1.10
} else {
  novoSalario = salario * 1.05
}

console.log("======================= RESULTADO ==========================")

console.log(`Novo salário: R$ ${novoSalario.toFixed(2)}`)