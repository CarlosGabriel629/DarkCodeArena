// Crie um programa que pergunte quantos alunos existem em uma turma.
// Depois disso:
// Leia a nota de cada aluno.
// Calcule a média da turma.
// Informe:
// A média final
// Quantos alunos ficaram acima da média
// Quantos ficaram abaixo da média

const readline = require('readline-sync')

let numAlunos = readline.questionInt('Quantos alunos existem na turma? ')

let somaNotas = 0
let notas = []

for (let i = 0; i < numAlunos; i++) {
  const nota = readline.questionFloat(`Digite a nota do aluno ${i + 1}: `)
  notas.push(nota)
  somaNotas += nota
}

let mediaTurma = somaNotas / numAlunos

let acimaMedia = 0
let abaixoMedia = 0

for (const nota of notas) {
  if (nota > mediaTurma) {
    acimaMedia++
  } else if (nota < mediaTurma) {
    abaixoMedia++
  }
}

console.log("======================= RESULTADOS ==========================")

console.log(`Média final da turma: ${mediaTurma.toFixed(2)}`)
console.log(`Número de alunos acima da média: ${acimaMedia}`)
console.log(`Número de alunos abaixo da média: ${abaixoMedia}`)