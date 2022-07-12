/*
            Atividade (De Stephany Snusch, da DIO): Map
        Praticar a sintaxe de multiplicação de números, usando o parâmetro this de um objeto criado pelo programador e depois
        sem ele.
*/

const maca = {
    value: 2,
};

const laranja = {
    value: 3,
};

function mapComThis(array, thisArg){
    return array.map(function(item){
        return item * this.value;
    }, thisArg); // Esse método map vai retornar um array mapeado. No momento, ele
    // recebe uma função de callback 'construído', seguido de um objeto em thisArg,
    // para ser usado com o this. Em this.value está se referindo ao valor value do objeto thisArg.
}

function mapSemThis(array){
    return array.map(function(item){
        return item * 2;
    });
}

const nums = [1,2];
const nums2 = [2,4,6,8,10];

console.log('this com maçã : ', mapComThis(nums, maca));
console.log('this com laranja : ', mapComThis(nums, laranja));

console.log('Array, sem usar o this : ', mapSemThis(nums2));