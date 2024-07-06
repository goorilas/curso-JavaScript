//digitar no terminal (node ./aula08/exe01) para ver o valor boleano relacional da expreção.
var a = 5
var b = 2
// se a é maior que b.
console.log(a > b)

var a = 5
var b = 2
// se a é menor que b.
console.log(a < b)

var a = 5
var b = 2
// se a é maior ou igual a b.
console.log(a >= b)

var a = 5
var b = 2
// se a é menor ou igual a b.
console.log(a <= b)

var a = 5
var b = 2
// se a é igual a b.
console.log(a == b)

var a = 5
var b = 2
// se a é diferente de b.
console.log(a != b)

// aqui vamos ver os operadores de igualdade restrita. que por sua vez verifica se a variavel é do mesmo valor e do mesmo tipo ex:(number ou string), idênticos.
var a = 5
var b = '5'
console.log(a === b)

// aqui vamos ver os operadores de igualdade restrita. que por sua vez verifica se a variavel é diferente no valor e no tipo ex:(number ou string).
var a = 5
var b = '5'
console.log(a !== b)

// para lógicos temos o sinal de negação (!) o sinal de conjunção e(&&) e o sinal de disjunção ou(||).
// o operador de negação (!) só tem um operando (unário), ou true ou false. uma coisa que não é verdadeira é false ou uma coisa que não é falsa é verdadeira.
// o operador de conjunção (&&) um operador binário de dois valores lógicos. (true && true) sempre é true, qualquer outro valor sem ser esse dará false.
// o operador de disjunção (||) um operador binário de dois valores lógicos. (false || true) basta que um lado seja verdadeiro para ser dado valor verdadeiro.
// quando temos operadores aritmeticos, relacionais e lógicos na mesma expreção. a ordem é sempre primeiro aritiméticos segundo relacionais e por ultimo os operadores lógicos.
// e se por acaso numa mesma expreção estiverem o e(&&), ou(||) e não(!), a ordem a ser tomade é primeiro o não(!) depois o e(&&) e por ultimo o ou(||). 
// exemplos:

var idade = 16
// a idade está entre 15 e 17?
console.log(idade >= 15 && idade <=17)

var estado = 'ES'
// o estado é RJ ou SP?
console.log(estado == 'RJ' || estado == 'SP')

var salário = 1600
var sexo = 'M'
// o salário é acima de 1500 e não é homem?
console.log(salário > 1500 && sexo != 'M')

// a ordem de precedência dentro de uma expreção é em primeiro lugar os operadores aritiméticos (primeiro o parênteses(), depois a potência **, depois a divisão e muultiplicação / *, seguindo do mais ou menos), 
// depois os operadores relacionais da esquerda para direita, depois os lógicos (primeiro o não(!) depois o e(&&) depois o ou(||)).

// operadores ternários é a interrogação (?) e o dois pontos (:) dentro de uma mesma expreção. Ele se chama ternáriio por que ele tem 3 partes (teste ? true : false)
//exemplo
var média = 9.0
console.log(média >= 7.0 ? "Aprovado" : "Reprovado")
