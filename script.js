const mensagens = [
    "Este é o texto original do parágrafo.",
    "Primeiro texto aleatório! 🌟",
    "Segunda opção de frase! 🚀",
    "Terceiro texto diferente! 💡",
    "Quarta mensagem sorteada! 🎉",
    "Quinta e última frase! 🛠️"
]

const cores = [
    'black',
    'yellow',
    'blue',
    'red',
    'green',
    'grey'
]

const cores_fundo = [
    'black',
    'yellow',
    'blue',
    'red',
    'green',
    'white'
]

const titulo = document.getElementById('titulo')
const paragrafo = document.getElementById('paragrafo')
const caixa = document.getElementById('caixa')
const lista = document.getElementById('lista')
const contadorTexto = document.getElementById('contador')

const btnTexto = document.getElementById('btnTexto')
const btnCor = document.getElementById('btnCor')
const btnFundo = document.getElementById('btnFundo')
const btnDestaque = document.getElementById('btnDestaque')
const btnFonte = document.getElementById('btnFonte')
const btnAdicionar = document.getElementById('btnAdicionar')
const btnRemover = document.getElementById('btnRemover')
const btnContador = document.getElementById('btnContador')
const btnReiniciar = document.getElementById('btnReiniciar')

btnTexto.addEventListener('click', function() {
    const indiceAleatorio = Math.floor(Math.random() * mensagens.length)
    
    paragrafo.textContent = mensagens[indiceAleatorio]
})

btnCor.addEventListener('click', function() {
    const indiceAleatorio = Math.floor(Math.random() * cores.length)

    paragrafo.style.color = cores[indiceAleatorio]
})

btnFundo.addEventListener('click', function() {
    const indiceAleatorio = Math.floor(Math.random() * cores_fundo.length)

    caixa.style.backgroundColor = cores_fundo[indiceAleatorio]

    if (caixa.style.backgroundColor == 'black') {
        caixa.style.color = 'white'
    } else {
        caixa.style.color = 'black'
    }
})

btnDestaque.addEventListener('click', function() {
    caixa.classList.toggle('destaque')
})

btnFonte.addEventListener('click', function() {
    if (titulo.style.fontSize == '2em') {
        paragrafo.style.fontSize = '20px'
        paragrafo.style.fontWeight = 'bold'
        titulo.style.fontSize = '40px'
    } else {
        titulo.style.fontSize = '2em'
        paragrafo.style.fontSize = '16px'
        paragrafo.style.fontWeight = 'normal'
    }
})

btnAdicionar.addEventListener('click', function() {
    const itemNovo = document.createElement('li')

    itemNovo.textContent = 'Item ' + (lista.children.length + 1)
    lista.appendChild(itemNovo)
})

btnRemover.addEventListener('click', function() {
    if (lista.lastElementChild) {
        lista.lastElementChild.remove()
    }
})

let cliques = 0

btnContador.addEventListener('click', function() {
    cliques = cliques + 1
    contadorTexto.textContent = cliques
})

btnReiniciar.addEventListener('click', function() {
    cliques = 0
    contadorTexto.textContent = cliques
})