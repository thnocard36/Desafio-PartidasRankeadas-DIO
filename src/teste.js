playingGame()

// Variavel da função sendo chamada
let resultRanking = playingGame(22, 11)
console.log()

// fdsfdsfdsfsf
function playingGame(quantVitorias, quantDerrotas) {
    let resultRanking = quantVitorias - quantDerrotas
    return resultRanking
    calcRanking() // Chamando a função de Calcular Ranking
}

// dsadsdasdsadasd
function calcRanking() {

    // dsadsadsad
    if(resultRanking < 10) {
        // console.log("O Herói " + nomePersonagem + ", está no nivel " + nivelXP + " 'FERRO'")
        console.log("O Heroi " + nomePersonagem +  ", tem saldo: x e está no nível " + nivelXP + " 'Ferro'")
    } else if(resultRanking >= 11 && resultRanking <= 20) {
        console.log("O Heroi " + nomePersonagem +  ", tem saldo: x e está no nível " + nivelXP + " 'Bronze'")
    }
}