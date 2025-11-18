hankingPlaythroughCalc("Sonic", 200)

// Função que calcula o número de vitórias e derrotas de nosso heroi
function hankingPlaythroughCalc(nomeHeroi, saldoVitorias) {
    if(saldoVitorias < 10) {
        // console.log("O Herói " + nomeHeroi +", tem de saldo: " + saldoVitorias + " e está no nível " + nivelXP + "(Ferro)")
        console.log("O Herói " + nomeHeroi +", tem de saldo: " + saldoVitorias + " e está no nível 'Ferro'")
    } else if(saldoVitorias >=11 && saldoVitorias <=20) {
        console.log("O Herói " + nomeHeroi +", tem de saldo: " + saldoVitorias + " e está no nível 'Bronze'")
    } else if(saldoVitorias >=21 && saldoVitorias <=50) {
        console.log("O Herói " + nomeHeroi +", tem de saldo: " + saldoVitorias + " e está no nível 'Prata'")
    } else if(saldoVitorias >=51 && saldoVitorias <=80) {
        console.log("O Herói " + nomeHeroi +", tem de saldo: " + saldoVitorias + " e está no nível 'Ouro'")
    } else if(saldoVitorias >=81 && saldoVitorias <=90) {
        console.log("O Herói " + nomeHeroi +", tem de saldo: " + saldoVitorias + " e está no nível 'Diamante'")
    } else if(saldoVitorias >=91 && saldoVitorias <=100) {
        console.log("O Herói " + nomeHeroi +", tem de saldo: " + saldoVitorias + " e está no nível 'Lendário'")
    } else {
        console.log("O Herói " + nomeHeroi +", tem de saldo: " + saldoVitorias + " e está no nível 'Imortal'")
    }
}