//verificando idade para votar
var idade = 22 
//mostra uma fraze com a idade no console
console.log(`Você tem ${idade} anos.`)
// se idade for menos que 16 anos print no console Não vota.
if (idade < 16) {
    console.log('Não vota')
// caso for maior que 16 e menor que 18 ou idade maior que 65 o voto é opicional.
} else if (idade < 18 || idade > 65) {
    console.log('Voto opcional')
//caso tiver entre 18 a 64 anos o voto é obrigatório.
} else {
    console.log('Voto obrigatório')
}