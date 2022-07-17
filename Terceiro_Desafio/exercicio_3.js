//          Tarefa 3

function resultadoTomadas(rt1, rt2, rt3, rt4){
    if((rt1 <= 1 || rt1 >= 7) || (rt2 <= 1 || rt2 >= 7)
       || (rt3 <= 1 || rt3 >= 7) || (rt4 <= 1 || rt4 >= 7)){
            return;
    }
    let resultado = (rt1 - 1) + (rt2 - 1) + (rt3 - 1) + rt4;
    return resultado;
}

console.log(resultadoTomadas(6,5,4,3));