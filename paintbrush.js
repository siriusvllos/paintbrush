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

// funcoes p mudar o tema

function mudarTema(tema) {
    document.body.className = tema.value;
}
