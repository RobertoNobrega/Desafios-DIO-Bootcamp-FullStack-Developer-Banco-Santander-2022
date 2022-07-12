/*
            Atividade (De Stephany Snusch, da DIO): Reduce
    1. Somar todos os números de um array;
    2. Criar uma função, que recebe uma lista de preços e um número indicando o saldo disponível. Calcular
    o saldo final depois de subtrair todos os preços da lista enviada.
*/

/*      // Também Funciona.
function somaNumeros(array){
    return array.reduce(function(valorAnterior, valorAtual){
        console.log({valorAnterior});
        console.log({valorAtual});
        return valorAnterior + valorAtual;
    }, 0);  // Aqui, a função será executada duas vezes, sendo que o primeiro valor anterior será 0 .
}
*/

function somarNumeros(array){
    return array.reduce(function(valorAnterior, valorAtual){
        console.log({valorAnterior});
        console.log({valorAtual});
        return valorAnterior + valorAtual;
    }); // aqui, esta função será executada apenas uma vez.
}


const arr = [1,2];

const lista = [
    {
        name: 'sabão em pó',
        preco: 30,
    },
    {
        name: 'cereal',
        preco: 12,
    },
    {
        name: 'toalha',
        preco: 30,
    },
];

const saldoDisponivel = 100;

function calcularSaldo(saldoDisponibilizado, lista){
    return lista.reduce(function(valorAnterior, valorAtual, indexLista){
        console.log('Rodada: ', indexLista + 1);
        console.log({valorAnterior});
        console.log({valorAtual});
        return valorAnterior - valorAtual.preco;
    }, saldoDisponibilizado);  // OBS: Vai ser inicializado, usando o valor de saldoDisponibilizado.
}

console.log(somarNumeros(arr));

console.log(calcularSaldo(saldoDisponivel, lista));
