const prompt = require('prompt-sync')();

let saldo = 0

function ver_saldo(){
    return saldo
}

function realizar_deposito(valor_deposito){
    if(valor_deposito <= 0){
        console.log("nao é possivel fazer um deposito menor ou igual a zero")
        return false
    }
    saldo += valor_deposito
    return true
}

function realizar_saque(valor_saque){
    if(valor_saque > saldo){
        console.log("nao é possivel fazer um saque maior que o saldo")
        return null
    }
    saldo -= valor_saque
    return true
}

function menu(){
    console.log("----------------")
    console.log("Escolha uma opção:")
    console.log("1 - ver saldo")
    console.log("2 - realizar deposito")
    console.log("3 - realizar saque")
    console.log("4 - sair")
    console.log("----------------v4")
}
let rodando = 1;
while (rodando){
    menu();

    let opcao = prompt('Escolha uma opcao: ')
    console.clear();
    switch (opcao){
        case "1":
            console.log(`\x1b[32mR$ ${ver_saldo()}\x1b[0m`);
            break;
        case "2":
            let valor_deposito = Number(prompt('Valor do deposito: R$ '))
            if(realizar_deposito(valor_deposito)){
                console.log(`\x1b[32mSaldo atualizado:\x1b[0m`);
                console.log(`\x1b[32mR$ ${ver_saldo()}\x1b[0m`);
            }

            break;
        case "3":
            let valor_saque = Number(prompt('Valor do saque: R$ '))
            if(realizar_saque(valor_saque)){
                console.log(`\x1b[32mSaldo atualizado:\x1b[0m`);
                console.log(`\x1b[32mR$ ${ver_saldo()}\x1b[0m`);
            }
            break;
        case "4":
            console.log("fechando sistema");
            rodando = 0;
            break;
    }
}
