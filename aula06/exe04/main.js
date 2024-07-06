var nome = window.prompt('Qual é seu nome?')
//o comando write escreve a fraze na tela.
document.write(`Olá <strong>${nome}</strong>. Seu nome tem ${nome.length} letras.<br/>`)
document.write(`Seu nome em maiúsculo é ${nome.toUpperCase()}.<br/>`)
document.write(`Seu nome em minusculo é ${nome.toLowerCase()}.<br/>`)

//para aumenta uma casa decimal. Colocar o 1545.5 com duas casas decimais 1545.50.
var n1 = 1545.5
document.write(`Seu numero com uma casa a mais é ${n1.toFixed(2)}<br/>`)

//par substituir o ponto pela virgula usamos esse método.
document.write(`Seu numero com uma casa a mais é ${n1.toFixed(2).replace('.',',')}<br/>`)

//para usar uma string localizada(por parte do mundo) usamos exe: n1.toLocaleString('pt-BR'). style: 'currency' para mostrar em valor monetário. currency: 'BRL'.
document.write(`Seu saldo é de: ${n1.toLocaleString('pt-BR', {style: "currency", currency: 'BRL'})}<br/>`)

