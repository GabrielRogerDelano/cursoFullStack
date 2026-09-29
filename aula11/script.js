/*for(let i = 1; i<=5; i++){
    console.log(i)
}

let u = 1
while(u<=5){
    console.log(u)
    u++;
}*/

let car = ["Civic", "Kwid", "Totoya", "Chevete"]
let i = 0
let text = ""


while(car[i]){
    console.log("car[i] = "+car[i])
    text += car[i]
    i++;
    console.log(`text = ${text}`)
}