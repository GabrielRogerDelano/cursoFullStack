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
let estadoAtual = 'produtos'

const InputId = document.getElementById('id')
const btn = document.getElementById('btn')
const btnAside = document.getElementById('btnAside')
const mensagem = document.getElementById('mensagem')
const lista = document.getElementById('lista')
const aside = document.querySelector('aside')

async function BuscarProdutoId(id) {
    lista.innerHTML = ''
    mensagem.textContent = 'Procurando produto...'
    try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`)
        if (!res.ok) throw new Error(res.status)
        const data = await res.json()

        const card = document.createElement("article")

        card.innerHTML = `
        <div>
            <h4>Id</h4>
            <p>${data.id}</p>
            <h4>Nome</h4>
            <p>${data.title}</p>
            <h4>Preco</h4>
            <p>R$ ${data.price}</p>
            <h4>Categoria</h4>
            <p>${data.category}</p>
            <h4>Avaliacoes</h4>
            <p>${data.rating.rate} estrelas de ${data.rating.count} avaliações</p>
        </div>
        <div>
            <img src="${data.image}" width="50%">
        </div>
        `
        lista.appendChild(card)
        mensagem.textContent = 'Produto encontrado'
    } catch (err) {
        mensagem.textContent  = 'Erro ao procurar por esse ID'
        console.error(`Erro: ${err}| erroStatus : ${res.status}`)
    }
}

function renderizarProduto(data){

}

btn.addEventListener('click', async () => {
    const id = InputId.value
    renderizarProduto(id)
})

btnAside.addEventListener('click', () =>{
    aside.className == 'ativo'? aside.classList.remove('ativo'):aside.classList.add('ativo')
})
