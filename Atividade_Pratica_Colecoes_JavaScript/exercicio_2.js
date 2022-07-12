/*
            Exercício 2 (De Stephany Nush, da DIO):  Set
    1. Dado do Array [30, 30, 40, 5, 223, 2049, 3034, 5], retornar outro array, com apenas valores únicos.
*/

const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(array){
    const mySet = new Set(array);
    return [...mySet];  // OBS: Usando o Spread, para que cada elemento do Set seja tratado individualmente
    // e, em seguida, seja adicionado no array vazio, para assim, ser 'populado' corretamente.
}

console.log(valoresUnicos(meuArray));