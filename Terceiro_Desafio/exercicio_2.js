
//          Tarefa 2

function exibaNumeros(numero){
    if(numero <= 0)
        return;
    for(let aux = 1; aux < 10000; ++aux){
        if(aux % numero == 2){
            console.log(`${aux}`);
        }
    }
}

exibaNumeros(13);