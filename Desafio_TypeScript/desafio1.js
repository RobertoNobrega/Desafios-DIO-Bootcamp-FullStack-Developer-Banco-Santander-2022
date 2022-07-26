"use strict";
/*

// Como podemos rodar isso em um arquivo .ts sem causar erros?

let employee = {};   // Tipo Vazio.
employee.code = 10; // Erro.
employee.name = "John"; // Erro.

*/
//                          Soluções Possíveis
// Solução 1
let funcionario = {
    codigo: 25,
    nome: 'Thiago'
};
console.log('Solução 1 : Nome: ' + funcionario.nome + ' | Código: ' + funcionario.codigo); // Para ser impresso
// no console do navegador.
// Solução 2
let funcionario2 = {
    nome: 'Thiago',
    codigo: 25
};
console.log('Solução 2 : Nome: ' + funcionario2.nome + ' | Código: ' + funcionario2.codigo);
let funcionario3 = {
    nome: 'Thiago',
    codigo: 25
};
console.log('Solução 3 : Nome: ' + funcionario3.nome + ' | Código: ' + funcionario3.codigo);
// Solução 4 (ainda usando Interface)
const funcionario4 = {};
funcionario4.nome = 'Thiago';
funcionario4.codigo = 25;
console.log('Solução 4 : Nome: ' + funcionario4.nome + ' | Código: ' + funcionario4.codigo);
