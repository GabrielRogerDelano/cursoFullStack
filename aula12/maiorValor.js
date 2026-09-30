let numeros = [1,5,2,3]

// let num = 0
// let maiorValor = numeros.reduce((acc, atual) => acc > atual, num)
// console.log(maiorValor)

//funcionou
// function maior(array){
//     let maior = 0
//     for(let i = 0 ; i< array.length; i++){
//         if(array[i] > maior){
//             maior = array[i]
//         }
//     }
//     return maior
// }
// console.log(maior(numeros))

let maior = (array) => {
    let maior = 0
    for(let i = 0 ; i< array.length; i++){
        if(array[i] > maior){
            maior = array[i]
        }
    }
    return maior
}