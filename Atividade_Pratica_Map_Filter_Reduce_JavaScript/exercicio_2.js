/*
            Atividade (De Stephany Snusch, da DIO): Filter
    Filtrar e Retornar todos os números pares de um Array.
*/

function filtraPares(array){
    return array.filter(callBack);
}

/*
    // Também Funciona.
function filtraPares(array){
    return array.filter(function(item){
        return item % 2 === 0;
    });
}
*/   

function callBack(item){
    return item % 2 === 0;
}

const meuArray = [1,23,55,67,30,2,4];

console.log('Valores Pares: ', filtraPares(meuArray));
