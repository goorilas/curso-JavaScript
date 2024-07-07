//armazenar a hora real do sistema em uma variavel.
var agora = new Date()
//resgatar a variavel que esta a hora real do sistema
var hora = agora.getHours()
console.log(`Olá! Agora são ${hora} horas.`)
if (hora < 12) {
    console.log('Tenha um bom dia!')
} else if (hora >= 12 && hora < 18) {
    console.log('Tenha uma boa tarde!')
} else if (hora <= 24) {
    console.log('Tenha uma boa noite!')
} else {
    console.log('Essa hora não existe')
}