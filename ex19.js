// Um carro tinha 50 litros de combustível e consumiu 30%.
// Mostre:
// Quantos litros restaram.

let combustivelInicial = 50
let percentualConsumido = 30

let combustivelConsumido = (percentualConsumido / 100) * combustivelInicial
let combustivelRestante = combustivelInicial - combustivelConsumido

console.log("======================= RESULTADO ==========================")

console.log(`Litros restantes: ${combustivelRestante.toFixed(2)} litros`)   