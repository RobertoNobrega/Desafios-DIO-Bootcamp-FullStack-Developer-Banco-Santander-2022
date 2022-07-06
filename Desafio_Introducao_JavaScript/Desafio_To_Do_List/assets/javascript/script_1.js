
const formulario = document.getElementById('formulario_1');
const listaTarefas = document.getElementById('tarefas_aqui');

form.onsubmit = function(evento){
    evento.preventDefault();
    const campoEntrada = document.getElementById('Campo_Texto_1');
    addTarefa(campoEntrada.value);
    form.reset();
};

function addTarefa(descricao){
    const tarefaContainer = document.createElement('div');
    const novaTarefa = document.createElement('input');
    const campoTarefa = document.createElement('label');
    const descricaoTarefa = document.createTextNode(descricao);

    novaTarefa.setAttribute('type','checkbox');
    novaTarefa.setAttribute('name', descricao);
    novaTarefa.setAttribute('id', descricao);

    campoTarefa.setAttribute('for', descricao);
    campoTarefa.appendChild(descricaoTarefa);

    tarefaContainer.classList.add('tarefa-item');
    tarefaContainer.appendChild(novaTarefa);
    tarefaContainer.appendChild(campoTarefa);

    listaTarefas.appendChild(tarefaContainer);
}