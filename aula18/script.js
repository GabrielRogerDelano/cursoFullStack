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
const mensagem = document.getElementById('mensagem')
const lista = document.getElementById('lista')

async function buscarDados(id) {
    lista.innerHTML = ''
    mensagem.innerHTML = 'Procurando produto'
    try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`)
        if (!res.ok) throw new Error(res.status)
        const data = await res.json()

        const card = document.createElement("article")

        card.innerHTML = `
        <div>
            <label>Id</label>
            <p>${data.id}</p>
            <label>Nome</label>
            <p>${data.title}</p>
            <label>Preco</label>
            <p>${data.price}</p>
            <label>Categoria</label>
            <p>${data.category}</p>
            <label>Avaliacoes</label>
            <p>${data.rating.rate}</p>
        </div>
        <div>
            <img src="${data.image}" width="50%">
        </div>
        `
        lista.appendChild(card)
        mensagem.innerHTML = 'Produto encontrado'
    } catch (err) {
        console.error('Erro: ', err)
    }
}

btn.addEventListener('click', () => {
    const idValue = Number(InputId.value)

    buscarDados(idValue)
})