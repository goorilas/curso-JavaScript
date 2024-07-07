//usando o se(if) para adicionar uma condição de velocidade permitida, caso ultrapasse será multado.
var vel = 120
console.log(`A velocidade do seu carro é ${vel}Km/h`)
if (vel > 60) { //condição simples
    console.log(`Você ultrapassou a velocidade permitida. MULTADO!`)
}
console.log('Dirija sempre usando cinto de segurança')