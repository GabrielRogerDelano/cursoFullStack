const array = [2,3,4,5]

array.forEach((numero, indice) => {
    console.log(`indice ${indice}: ${numero * 2}`)
})

console.log("----------")

for(let i = 0; i < array.length; i++){
    console.log(`indice ${i}: ${array[i] * 2}`)
}