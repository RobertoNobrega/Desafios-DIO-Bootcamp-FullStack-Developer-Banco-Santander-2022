
function comparaNumeros(num1, num2){
    /* const saoIguais = num1 === num2; /* const informa que saoIguais é uma constante. = é o operador
    de atribuição, enquanto que === é o operador de 'igualdade'. Neste caso aqui, quando num1 === num2,
    vai retornar um valor booleano (true quando são valores iguais e false quando não são iguais). Esse
    valor será atribuído para saoIguais.
    */
    // const soma = num1 + num2;
    /*
    if(saoIguais){
        return "São iguais";
    }else{
        return "Não são iguais";
    }
    */
    // const primeiraFrase = criaPrimeiraFrase(num1, num2); // Chamando a função, ao qual está recebendo valores
    // como argumentos. O retorno da função está sendo atribuído para a constante primeiraFrase.
    /* return saoIguais ? "São iguais" : "Não são iguais";  /* Usando um if ternário. Se for verdadeiro, vai
    retornar "São iguais", caso contrário, retorna "Não são iguais".
    */
   if(!num1 || !num2)
     return 'Defina dois números!';
   const primeiraFrase = criaPrimeiraFrase(num1, num2);
   const segundaFrase = criaSegundaFrase(num1, num2);
   return `${primeiraFrase} ${segundaFrase}`;
}

function criaPrimeiraFrase(num1, num2){
    let saoIguais = ''; // Criando uma variável, ao qual recebe uma string vazia.
    if(num1 !== num2){
        saoIguais = 'não';
    }
    // OBS: ` `  é crase. É o que está sendo usado abaixo, na linha 29.
    return `Os números ${num1} e ${num2} ${saoIguais} são iguais`
};

function criaSegundaFrase(num1, num2){
    const soma = num1 + num2;
    const compara10 = soma > 10; /* compara10 vai receber uma valor booleano. */
    const compara20 = soma > 20;
    let resultado10 = 'menor';
    let resultado20 = 'menor';

    if(compara10){
        resultado10 = 'maior';
    }

    if(compara20){
        resultado20 = 'maior';
    }
    return `Sua soma é ${soma}, que é ${resultado10} que 10 e
    ${resultado20} que 20.`
};

console.log(comparaNumeros(1, 2));  // Exibindo o resultado da função comparaNumeros.
console.log(comparaNumeros(20, 20));