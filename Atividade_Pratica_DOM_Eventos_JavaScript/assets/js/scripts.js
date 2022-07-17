/** 
 *  OBS: Quando está 'codando', uma boa prática do JavaScript é fazer com que cada função seja reponsável
 *  em realizar apenas uma determinada tarefa.
 */

function changeMode(){
    //console.log('Cliquei!');
    changeClasses();  // Chamando a função.
    changeText();
}

/* 
   Abaixo: Função, para adicionar o dark-mode na class de cada elemento (button, h1, body, footer) do
   corpo da função. 
*/
function changeClasses(){ 
    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

function changeText(){
    const lightMode = 'Light Mode';
    const darkMode = 'Dark Mode';
    if(body.classList.contains(darkModeClass)){
        button.innerHTML = lightMode;
        h1.innerHTML = darkMode + ' ON';
        return;
    }
    button.innerHTML = darkMode;
    h1.innerHTML = lightMode + ' ON';
}

const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector'); // Obtendo um botão.
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0]; // OBS: Como a tag body não possui
// id ou class (no arquivo index.html), então tem que usar esta função getElementsByTagName,
// recebendo o nome da tag como chamada da função. Como getElementsByTagName retorna um array
// de elementos, então, para este caso, o array vai possuir apenas um elemento. Então, por isso
// que está usando [0], para acessar o elemento na posição 0 do array.

const footer = document.getElementsByTagName('footer')[0];

//console.log(button);  // OBS: Podemos verificar no console do terminal (do navegador),
// se o referido botão foi obtido.

button.addEventListener('click', changeMode); // Evento de Botão. O evento, aqui, vai acontecer
// quando o botão for clicado. changeMode é a função que será chamada, para poder "fazer" o evento
// ser feito.