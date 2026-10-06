class Usuario{
    constructor(nome, email, senha){
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }
    
    logar(){
        return console.log(`Seja bem-vindo ${this.nome}`)
    }
}


