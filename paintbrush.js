// funcoes p escolher cor de fundo e cor do pixel

var corEscolhida = undefined;
function essaCor(cor) {
    corEscolhida = cor;
}
function mudarCor(clickedPixel) {
    clickedPixel.style.backgroundColor = corEscolhida;
}
function limpar() {
    const pixel = document.getElementsByName ("one pixel");
    for (i = 0; i <= pixel.length; i = i + 1) { 
        pixel[i].style.backgroundColor = corEscolhida;
    }
}

// funcao p mudar o tema

function mudarTema(tema) {
    document.body.className = tema.value;
    localStorage.setItem("ultimoTema", tema.value);
}

// funcoes p retornar oq esta salvo no localstorage

function salvar() {
    const pixel = document.getElementsByName ("one pixel");
    var cores = [];
    for (i = 0; i < pixel.length; i = i + 1) {
        console.log ("index = " + i + "cor = " + pixel[i].style.backgroundColor);
        cores.push (pixel[i].style.backgroundColor);
    }
    cores = JSON.stringify(cores);
    localStorage.setItem("salvo", cores);
}

function retornarSalvo() {
    const pixel = document.getElementsByName ("one pixel");
    var salvo = localStorage.getItem("salvo");
    salvo = JSON.parse(salvo);
    for (i = 0; i < pixel.length; i = i + 1) {
        pixel[i].style.backgroundColor = salvo[i];
    }

    var tema = localStorage.getItem("ultimoTema");
    var temaAtual = document.getElementById("temas");
    temaAtual.value = tema;
    mudarTema(temaAtual);
}
