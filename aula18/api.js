const BASE_URL = 'https://fakestoreapi.com'

async function BuscarProdutoId(id) {
    lista.innerHTML = ''
    mensagem.textContent = 'Procurando produto...'
    try {
        const res = await fetch(``)
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

export const ApiService = {
    async getProdutosPorId(id){
        const res = fetch(`${BASE_URL}/products/${id} `)
        if(!res.ok) throw new Error(`Erro de status${res.status}`)
        return await res.json()
    },

    async getUsuariosPorId(id){
        const res = fetch(`${BASE_URL}/users/${id} `)
        if(!res.ok) throw new Error(`Erro de status${res.status}`)
        return await res.json()
    },

    async getCarrinhoPorId(id){
        const res = fetch(`${BASE_URL}/carts/${id}`)
        if(!res.ok) throw new Error(`Erro de status ${res.status}`)
        return await res.json()
    }
}