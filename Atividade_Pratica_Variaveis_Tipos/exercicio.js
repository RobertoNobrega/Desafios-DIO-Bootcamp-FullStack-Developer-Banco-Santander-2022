//   Exercício sobre Palíndromo. Palíndromo é uma palavra que pode ser lida, tanto da esquerda para a
// direita, quanto da direita para a esquerda. O efeito é que a palavra e o som dela serão os mesmos.
//   EX: ovo, arara, Ana.

        /*  Solução 1 */
function verificaPalindromo1(string){ /* Esta função, recebe uma string como parâmetro. */
    if(!string) // Caso a string não existir ou ser vazia ou ser undefined.
       return "String Inexistente.";
    /*
        string.split("") : Vai retornar um array, ao qual cada espaço contíguo terá um caracter
        da String.
        reverse(): Dado o array, o retorno dele será um outro array, com seus elementos invertidos na
        ordem (ou seja, ordem decrescente).
        join(""): Dado o array, vai retornar uma string concatenada, formada pelos elementos do array.
    */
    return string.split("").reverse().join("") === string;
}

let myVar1;
let myVar2 = null;

console.log(verificaPalindromo1("arara"));   // Chamando o método verificaPalindromo1 e exibindo o resultado
// no Terminal.

        /* Solução 2 */
function verificaPalindromo2(string){
    if(!string)
      return "String Inexistente";
    for(let i = 0; i < string.length / 2; i++){ // O loop tem que percorrer a metade do tamanho da string.
        if(string[i] !== string[(string.length - 1) - i])
            return "String não é um Palíndromo";
    }
    return "String é um Palíndromo";
}

console.log(verificaPalindromo1("Tom"));
console.log(verificaPalindromo1(""));
console.log(verificaPalindromo1(myVar1));
console.log(verificaPalindromo1(myVar2));

console.log(verificaPalindromo2("arara"));   // Chamando o método verificaPalindromo2 e exibindo o resultado
// no Terminal.

console.log(verificaPalindromo2("Tom"));
console.log(verificaPalindromo2(""));
console.log(verificaPalindromo2(myVar1));
console.log(verificaPalindromo2(myVar2));
