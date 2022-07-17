
//          Tarefa 1

function exibirValoresPares(numeroEntrada){  /* Funciona. */
    //var numeroEntrada = prompt('Digite um valor: ');
    //let numeroEntrada = 10;
    if(numeroEntrada <= 0)
        return;
    for(let aux = 1; aux <= numeroEntrada; ++aux){
        if(aux % 2 === 0){
            console.log(`${aux}^2 = ` + (aux ** 2));
        }
    }
}

var numeroEntrada = prompt('Digite um valor: ');
exibirValoresPares(numeroEntrada);