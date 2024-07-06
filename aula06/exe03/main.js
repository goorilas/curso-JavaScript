//window.prompt sempre retorna uma string.
var n1 = window.prompt('Digite um numero')
var n2 = window.prompt('Digite outro numero')
var s = n1 + n2
window.alert('A soma dos valores é ' + s)
//(number + number) para adição
//(string + string) para concatenação

//para fazer a converção da string para um numero inteiro usamos esse metodo.
var n1 = Number.parseInt(window.prompt('Digite um numero'))
var n2 = Number.parseInt(window.prompt('Digite outro numero'))
var s = n1 + n2
window.alert('A soma dos valores é ' + s)

//para fazer a converção da string para um numero quebrado usamos esse metodo.
var n1 = Number.parseFloat(window.prompt('Digite um numero'))
var n2 = Number.parseFloat(window.prompt('Digite outro numero'))
var s = n1 + n2
window.alert('A soma dos valores é ' + s)

//também podemos deixar o javascript decidir para nos usando apenas o (Number).
var n1 = Number(window.prompt('Digite um numero'))
var n2 = Number(window.prompt('Digite outro numero'))
var s = n1 + n2
window.alert('A soma dos valores é ' + s)

//para converções de numero para string podemos ultilizar (String(variavel)) ou também variavel.toString.
window.alert('A soma dos valores é ' + String(s))

//usamos tamplate string que é a craze com placeholder ${} na fraze para a formatação .
window.alert(`A soma dos valores ${n1} e ${n2} é igual à ${s}`)

//usamos o método length para nos dizer quantas letras tem essa string.
s.length

//usamos o método toUpperCase() para mudar a string para letras maiusculas.
s.toUpperCase()

//usamos o método toLowerCase() para colocar tudo em letras minusculas.
s.toLowerCase()