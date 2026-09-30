let palavras = ["abacaxi", "manga", "fulano", "Quebrado", "casaco"]
let palavras_com_6_letras = palavras.filter( palavra => palavra.length >= 6)
console.log(`palavras com 6 ou mais letras = [${palavras_com_6_letras}]`)

let numeros = [1,2,3,4,5,6,7,8,9,10]
let pares = numeros.filter(num => num % 2 === 0)
console.log(pares)