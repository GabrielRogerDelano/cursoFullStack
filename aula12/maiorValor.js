let numeros = [1,5,12,2,3,7]

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

let n = 0
numeros.forEach(elemento => {
    if(elemento > n){
        n = elemento
    }
})
console.log(n)

// dessa forma é a mais limpa
// let max = Math.max(...numeros)
// console.log(max)