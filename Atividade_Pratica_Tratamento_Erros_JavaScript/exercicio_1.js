/*
            Atividade (De Stephane Snusch, da DIO): Validação de Erros por Tipo
    1. Criar uma função, recebendo um array e um número;
       Se os parâmetros não forem enviados, lançar errodo tipo ReferenceError;
       Se o array não é do tipo 'object', lançar erro do tipo TypeError;
       Se o número não é do tipo 'number', lançar erro do tipo TypeError;
       Se o tamanho do array for diferente de número enviado como parâmetro, lançar erro do tipo RangeError;
    2. Usar declaração try-catch
    3. Chamadas de catch devem ser filtradas, para cada tipo de erro, usando o operador instanceof.
*/

function validaArray(array, numero){
    try{
        if(!array && !numero) throw new ReferenceError("Envie os Parâmetros");

        if(typeof array !== 'object') throw new TypeError("Array tem que ser do tipo object.");

        if(typeof numero !== 'number')
            throw new TypeError("Número tem que ser do tipo number.");

        if(array.length !== numero) throw new RangeError("Tamanho Inválido!");

        return array;
    }catch(e){
        if(e instanceof ReferenceError){
            console.log("Este erro é um ReferenceError.");
            console.log(e.name);
            console.log(e.stack);
            console.log(e.message);
        }else if(e instanceof TypeError){
            console.log("Este erro é um TypeError.");
            console.log(e.name);
            console.log(e.stack);
            console.log(e.message);
        }else if(e instanceof RangeError){
            console.log("Este erro é um RangeError.");
            console.log(e.name);
            console.log(e.stack);
            console.log(e.message);
        }else{
            console.log(e + " :Tipo de Erro Não Esperado.");
        }
    }
}

console.log(validaArray());
console.log(validaArray(5,6));
console.log(validaArray([],'a'));
console.log(validaArray([],5));
console.log(validaArray([1,2,3,4,5],5));