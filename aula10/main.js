//seleconando um Id e colocando eventos de clicar com o mause, entrar na div arrastando o mause, e sair da div com o mause.
var a = window.document.getElementById('area')
a.addEventListener('click', clicar) // para ficar prestando atênção em determinado evento.
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)

function clicar() {
    a.innerText = 'Clicou!'
    a.style.background = 'red'
}
function entrar() {
    a.innerText = 'Entrou!'
}
function sair() {
    a.innerText = 'Saiu'
    a.style.background = 'green'
}