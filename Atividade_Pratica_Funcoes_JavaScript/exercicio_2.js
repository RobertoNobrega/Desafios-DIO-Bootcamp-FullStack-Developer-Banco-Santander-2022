/*
                Atividade 2 (De Stephany Snusch, da DIO): This
        Dada a função calcularIdade, use os métodos call e apply para mudar o valor de this.
         OBS: Criar próprios objetos para a atividade.
*/

function calcularIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pesso1 = {
    nome: 'Maria',
    idade: 30,
};

const pessoa2 = {
    nome: 'Carla',
    idade: 26,
};

const animal = {
    nome: 'Fiona',
    idade: 5,
    raca: 'Pug',
};

console.log(calcularIdade.call(pessoa2, 30));
console.log(calcularIdade.call(animal, 7));

console.log(calcularIdade.apply(animal, [4])); // Similar ao call, porém o valor tem que ser passado entre [ ].
