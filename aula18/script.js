// const dados = {
//     "id": 1,
//     "nome": "maria",
//     "email": "maria@gmail.com",
//     "ativo": true,
//     "habilidades": ["JavaScript", "React", "Node"]
// }

// fetch('https://fakestoreapi.com/products/')
//     .then(res => {
//         if(!res.ok) throw new Error(res.status)
//             return res.json()
//     })
//     .then(data => console.log(data))
//     .catch(err => console.error('Erro: ', err))

const InputId = document.getElementById('id')
const btn = document.getElementById('btn')
const lista = document.getElementById('lista')

async function buscarDados(id) {
    lista.innerHTML = ''
    try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`)
        if(!res.ok) throw new Error(res.status)
        const data = await res.json()
        
        const card = document.createElement("article")

        card.innerHTML = `
        <p>id = ${data.id}</p>
        <p>nome = ${data.title}</p>
        <p>preco = ${data.price}</p>
        <p>categoria = ${data.category}</p>
        <p>avaliacoes = ${data.rating.rate}</p>
        
        `
        
        lista.appendChild(card)
    } catch (err) {
        console.error('Erro: ',err)
    }
}

btn.addEventListener('click', ()=>{
    const idValue = Number(InputId.value)

    buscarDados(idValue)
})
//document.addEventListener('DOMContentLoaded', buscarDados(1))