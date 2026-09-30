//retorna o primeiro elemento que satisfaça a condição
let numeros = [1,2,6,2,4]

console.log(numeros.find(elemento => elemento >= 5))

//FindIndex, retorna a index do primeiro elemento
let indice_do_elemento = numeros.findIndex(elemento => elemento >= 5)
console.log(`ìndice do elemento = ${indice_do_elemento}`)