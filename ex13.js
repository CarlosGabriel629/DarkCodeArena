// Peça ao usuário:
// Peso
// Altura
// Calcule o IMC e Informe:
// Abaixo do peso
// Peso normal
// Sobrepeso
// Obesidade

//essa foi mancada mateus tive que pesquisar no google!!! peso/(altura x altura)

const readline = require('readline-sync')

let peso = readline.questionFloat('Digite seu peso (kg): ')
let altura = readline.questionFloat('Digite sua altura (m): ')

let imc = peso / (altura * altura)

console.log("======================= RESULTADO ==========================")

if (imc < 18.5) {
  console.log(`Seu IMC é ${imc.toFixed(2)}: Abaixo do peso`)
} else if (imc >= 18.5 && imc < 25) {
  console.log(`Seu IMC é ${imc.toFixed(2)}: Peso normal`)
} else if (imc >= 25 && imc < 30) {
  console.log(`Seu IMC é ${imc.toFixed(2)}: Sobrepeso`)
} else {
  console.log(`Seu IMC é ${imc.toFixed(2)}: Obesidade`)
}