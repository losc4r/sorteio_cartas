/**
 * Estudo do array
 * Exemplo de uso em um jogo de cartas
 * @author Carlos Antonio
 */

function sortear() {
    let nipes = ["♥","♦","♣","♠"]
    let faces = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
    
    // gerando números aleatórios em JS (random)
    // math.random() * 4 (gera 4 números: 0 1 2 3)
    // math.floor() converte para números inteiros
    let nipeSorteado = nipes[Math.floor(Math.random()*4)]
    let faceSorteada = faces[Math.floor(Math.random()*13)]

     //console.log(`${faceSorteada} de ${nipeSorteado}`)

    // Determinar a cor com base no nipe sorteado
    let cor
    if (nipeSorteado === '♥' || nipeSorteado === '♦') {
        cor = '#ff0000'
    } else {
        cor = '#000'
    }

    // renderizar o canto superior esquerdo da carta
    // a linha abaixo adiciona a div identificada como 'supEsq' a face e o nipe sorteado e também tags <div> adicionais
    document.getElementById('supEsq').innerHTML = `<div>${faceSorteada}</div> <div>${nipeSorteado}</div>`
    // a linha abaixo muda o css ref a tag identificada
    document.getElementById('supEsq').style.color = cor

    // renderizar o centro da carta
    // verificar o nipe sorteado e rendereizar uma imagem ou o nipe e sua repectiva cor d acordo com a carta
    let cc = document.getElementById('centroCarta')
    if (faceSorteada === 'J') {
        cc.innerHTML = `<img src="./img/valete.png">`
    } else if (faceSorteada === 'Q') {
        cc.innerHTML = `<img src="./img/dama.png">`
    } else if (faceSorteada === 'K') {
        cc.innerHTML = `<img src="./img/rei.png">`
    } else {
        cc.innerHTML = `${nipeSorteado}`
        cc.style.color = cor
    }

    // renderizar o canto inferior direito da carta
    document.getElementById('infDir').innerHTML = `<div>${faceSorteada}</div> <div>${nipeSorteado}</div>`
    document.getElementById('infDir').style.color = cor
}

    //let nipe = nipes [Math.floor(Math.random()*4)];
    //let face = faces [Math.floor(Math.random()* faces.length)];
    //document.write("<h1>" + face + nipe + "</h1>");
