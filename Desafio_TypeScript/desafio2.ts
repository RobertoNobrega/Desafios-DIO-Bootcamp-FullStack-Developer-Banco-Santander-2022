/*
// Como podemos melhorar o esse código usando TS? 

let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
}
*/

//                      Solução

let pessoa1: {nome: string, idade: number, profissao: string} = {
    nome: "Maria",
    idade: 29,
    profissao: "Atriz"
}

let pessoa2: {nome: string, idade: number, profissao: string} = {
    nome: "Roberto",
    idade: 19,
    profissao: "Padeiro"
}

interface Pessoa{
    nome: string,
    idade: number | string,
    profissao: string
}

let pessoa3: Pessoa = {
    nome: "Laura",
    idade: "32",
    profissao: "Atriz"
}

let pessoa4: Pessoa = {
    nome: "Carlos",
    idade: 19,
    profissao: "Padeiro"
}
