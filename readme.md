# 🏆 Classificador de Nível de Herói (Ranked Calculator)

Este é um projeto de lógica de programação que implementa uma função para calcular o **saldo de vitórias** de um herói em um jogo e determinar seu **nível (rank)** com base nesse saldo.

## 🧑‍💻 Créditos

|**Categoria**|  **Detalhe** |
|----------------------------------------------------------|--|
|         Professor |[Felipe Aguiar](https://github.com/felipeAguiarCode/) |                                                 
|         Autor | [Thiago Cardoso](https://github.com/thnocard36) |                                                                                             |  |

## 🎯 Objetivo

Criar uma função que:

1.  Receba o **nome** do herói, o número de **vitórias** e o número de **derrotas** de um jogador.
    
2.  Calcule o **saldo de Rankeadas** através da fórmula: $\text{Saldo} = \text{Vitórias} - \text{Derrotas}$.
    
3.  Retorne o resultado formatado em uma string, indicando o nome, o saldo e o nível do herói.
    

## 🗺️ Regras de Classificação

O **nível (rank)** é determinado pelo **saldo de vitórias** do herói, seguindo as regras abaixo: 
|**Saldo de Vitórias (Vitórias−Derrotas)**|  **Nível (Rank)** |
|----------------------------------------------------------|--|
|         11 - 20 | Ferro |                                                 
|         21 - 50 | Bronze |                                                 |         51 - 80 | Ouro |                                                 
|         81 - 90 | Diamante |                                                 
|         91 - 100 | Lendário |                                                 
|         > 101 | Imortal |                                                 |  |

----------

## 💻 Código JavaScript

Abaixo está o código completo da função que realiza o cálculo e a classificação.

*JavaScript*

```
/**
 * Função que calcula o saldo de Rankeadas (Vitórias - Derrotas) e classifica o Herói.
 * @param {string} nomeHeroi - Nome do herói.
 * @param {number} vitorias - Quantidade de vitórias.
 * @param {number} derrotas - Quantidade de derrotas.
 */
function classificarHeroi(nomeHeroi, vitorias, derrotas) {
    // 1. Cálculo do Saldo (Vitórias - Derrotas)
    let saldoVitorias = vitorias - derrotas;
    let nivelXP;
    
    // 2. Determinação do Nível (Rank)
    if(saldoVitorias <= 10) { 
        nivelXP = "Ferro";
    } else if(saldoVitorias >=11 && saldoVitorias <=20) {
        nivelXP = "Bronze";
    } else if(saldoVitorias >=21 && saldoVitorias <=50) {
        nivelXP = "Prata";
    } else if(saldoVitorias >=51 && saldoVitorias <=80) {
        nivelXP = "Ouro";
    } else if(saldoVitorias >=81 && saldoVitorias <=90) {
        nivelXP = "Diamante";
    } else if(saldoVitorias >=91 && saldoVitorias <=100) {
        nivelXP = "Lendário";
    } else {
        nivelXP = "Imortal";
    }
    
    // 3. Saída no formato solicitado
    console.log(`O Herói **${nomeHeroi}** tem de saldo: **${saldoVitorias}** está no nível **${nivelXP}**`);
}

// 🚀 Exemplos de Uso e Teste
classificarHeroi("Sonic", 150, 45); // Saída: O Herói **Sonic** tem de saldo: **105** está no nível **Imortal**

classificarHeroi("Tails", 70, 20); // Saída: O Herói **Tails** tem de saldo: **50** está no nível **Prata**

classificarHeroi("Knuckles", 5, 15); // Saída: O Herói **Knuckles** tem de saldo: **-10** está no nível **Ferro**

```

----------

## ⚙️ Como Executar

1.  Salve o código acima em um arquivo com a extensão `.js` (ex: `rank_calc.js`).
    
2.  Abra o terminal na pasta onde o arquivo foi salvo.
    
3.  Utilize o **Node.js** para executar o script:
    
    Bash
    
    ```
    node rank_calc.js
    
    ```
    
4.  A saída será exibida no console, mostrando a classificação de cada herói testado.