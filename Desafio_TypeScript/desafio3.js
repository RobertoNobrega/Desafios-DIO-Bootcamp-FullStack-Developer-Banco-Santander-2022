"use strict";
/*

// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');

campoSaldo.innerHTML = 0

function somarAoSaldo(soma) {
    campoSaldo.innerHTML += soma;
}

function limparSaldo() {
    campoSaldo.innerHTML = '';
}

botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(soma.value);
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});

*/
// OBS: https://github.com/lira1705/mentoria-typescript/blob/main/src/desafios/desafio4.js (Tentar Fazer)
//                  Solução
// export {} // Para que o programa não reclame de variáveis duplicadas.
//  OBS: getElementById pode retornar nulo. Por isso, usa-se o if, para garantir o funcionamento do código.
let botaoAtualizar = document.getElementById('atualizar-saldo'); // OBS: Poderá ou Não ser Nulo.
let botaoLimpar = document.getElementById('limpar-saldo'); // ! indica que botaoLimpar jamais será nulo.
let soma = document.getElementById('soma'); // Mesmo efeito acima.
let campoSaldo = document.getElementById('campo-saldo'); // OBS: Poderá ou Não ser Nulo.
let saldoTotal = 0;
limparSaldo();
function somarAoSaldo(soma) {
    if (campoSaldo) {
        saldoTotal += soma;
        campoSaldo.innerHTML = saldoTotal.toString();
        apagarCampoSoma();
    }
}
function apagarCampoSoma() {
    soma.value = "";
}
function limparSaldo() {
    if (campoSaldo) {
        saldoTotal = 0;
        campoSaldo.innerHTML = saldoTotal.toString();
    }
}
if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', () => {
        somarAoSaldo(Number(soma.value));
    });
}
botaoLimpar.addEventListener('click', () => {
    limparSaldo();
});
