
const delay = (ms) => {
    new Promise((resolve) => setTimeout(resolve, ms))
}
while(true){
    console.log(Date.now())
    await delay(1000)
}
