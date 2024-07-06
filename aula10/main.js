//seleconando um Id e colocando eventos de clicar com o mause, entrar na div arrastando o mause, e sair da div com o mause.
var a = window.document.getElementById('area')

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