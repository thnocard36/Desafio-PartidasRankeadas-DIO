// Variavel da função sendo chamada e aplicando alguns argumentos
hankingPlaythroughCalc("Sonic", 150, 20)

function hankingPlaythroughCalc(nomeHeroi, numVitorias, numDerrotas) { // Função que calcula o número de vitórias e derrotas de nosso heroi

    let saldoVitorias = numVitorias - numDerrotas; // Calculando o saldo de Vitórias sobre as Derrotas, não se superando as de Derrota
    let nivelXP;

    if(saldoVitorias <= 10) { // Caso o valor informado seja maior ou igual ao próprio '10', uma mensagem será exibida
        nivelXP = "Ferro"
        // console.log("O Herói " + nomeHeroi +", tem de saldo: " + saldoVitorias + " e está no nível 'Ferro'")
    } else if(saldoVitorias >=11 && saldoVitorias <=20) {
        // console.log("O Herói " + nomeHeroi +", tem de saldo: " + saldoVitorias + " e está no nível 'Bronze'")
        nivelXP = "Bronze"
    } else if(saldoVitorias >=21 && saldoVitorias <=50) {
        // console.log("O Herói " + nomeHeroi +", tem de saldo: " + saldoVitorias + " e está no nível 'Prata'")
        nivelXP = "Prata"
    } else if(saldoVitorias >=51 && saldoVitorias <=80) {
        // console.log("O Herói " + nomeHeroi +", tem de saldo: " + saldoVitorias + " e está no nível 'Ouro'")
        nivelXP = "Ouro"
    } else if(saldoVitorias >=81 && saldoVitorias <=90) {
        // console.log("O Herói " + nomeHeroi +", tem de saldo: " + saldoVitorias + " e está no nível 'Diamante'")
        nivelXP = "Diamante"
    } else if(saldoVitorias >=91 && saldoVitorias <=100) {
        // console.log("O Herói " + nomeHeroi +", tem de saldo: " + saldoVitorias + " e está no nível 'Lendário'")
        nivelXP = "Lendário"
    } else {
        // console.log("O Herói " + nomeHeroi +", tem de saldo: " + saldoVitorias + " e está no nível 'Imortal'")
        nivelXP = "Imortal"
    }

    console.log("O Herói " + nomeHeroi +", tem de saldo: " + saldoVitorias + " e está no nível: " + nivelXP)
}