let numeros = [1,6,2]


//trabalhoso
let soma1 = (ArrayNumeros) => {
    let resultado = 0
    for(let i= 0; i< ArrayNumeros.length; i++){
        resultado += ArrayNumeros[i]
    }
    return resultado
}

let resultado = 0
numeros.forEach(num => resultado += num)

console.log(resultado)