document.addEventListener("DOMContentLoaded", function () {
    const select = document.getElementById("cor");
    const harley = document.getElementById("harley");

    function atualizarCor() {
        console.log(select.value);
        switch (select.value) {
            case 'vermelha':
                document.body.style.backgroundColor = '#a32525';
                harley.setAttribute('src', 'img/vermelha.png');
                break;
            case 'cinza':
                document.body.style.backgroundColor = '#a9a9a9';
                harley.setAttribute('src', 'img/cinza.png');
                break;
            case 'preta':
                document.body.style.backgroundColor = '#3d3d3d';
                harley.setAttribute('src', 'img/preta.png');
                break;
            case 'azul':
                document.body.style.backgroundColor = '#348380';
                harley.setAttribute('src', 'img/azul.png');
                break;
        }
    }

    // Executa no carregamento inicial da página
    atualizarCor();

    // Executa sempre que o usuário muda o select
    select.addEventListener("change", atualizarCor);
});

// const select = document.getElementById('cor')
// select.addEventListener("change", function(event){
//     const valorAtual = event.target.value;
//     document.body.style.backgroundColor = valorAtual;
// })

const paragrafo = document.getElementById('paragrafo')

paragrafo.textContent = "joja cola"
paragrafo.innerHTML = "<b>Osuamonicadocaralho</b>"

const img = document.getElementById('mudarFoto')

function alterarImagem() {
    if (img.getAttribute('alt') == 'harley') {
        img.setAttribute('src', "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUP5evbcs5c7cptwbZ8iti3EQcA6tbfg16dOzoF4t2nA&s=10")
        img.setAttribute('alt', "kawasaki")
    } else {
        img.setAttribute('src', "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNC_n0yMrEyX8LM3w38-SQ0YNOLF1IZlJWYAIbynkGTw&s=10")
        img.setAttribute('alt', "harley")
    }
}
