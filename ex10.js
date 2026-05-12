// Crie um programa que exiba a soma de todos os números pares entre 1 e
// 100.

let soma = 0      

for (let i = 2; i <= 100; i += 2) {
  soma += i
}

console.log('====================== resultado ============================')

console.log(`A soma de todos os números pares entre 1 e 100 é: ${soma}`)