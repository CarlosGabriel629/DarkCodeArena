// Crie um programa que leia a nota de um aluno (de 0 a 10).
// O programa deverá verificar:
// Se a nota for maior ou igual a 7 → mostrar "Aluno aprovado"
// .
// Se a nota estiver entre 5 e 6.9 → mostrar "Aluno em recuperação"
// .

// Se a nota for menor que 5 → mostrar "Aluno reprovado"

const readline = require('readline-sync')

let nota = readline.questionFloat('Digite a nota do aluno (0 a 10): ')

console.log("======================= BOLETIM ==========================")


if (nota >= 7) {
  console.log('Aluno aprovado')
} else if (nota >= 5 && nota < 7) {
  console.log('Aluno em recuperação')
} else {
  console.log('Aluno reprovado')
}   