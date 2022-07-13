const BASE_URL = 'https://thatcopy.pw/catapi/rest/';  // URL do Site.
const catBtn = document.getElementById('change-cat'); // Obtendo a referência do botão da página do
// HTML (index.html), que apresenta o id de valor change-cat.

/*
// Abaixo, temos uma função assíncrona (usando a palavra async), expressada como
// sendo uma Arrow Function.
//          Maneira 1
const getCats = async () => {
    try{
        const data = await fetch(BASE_URL);
        const json = await data.json();
        return json.webpurl;  // Retornando a imagem comprimida do JPEG.
    }catch(e){
        console.log(e.message);
    }
};
*/

// Abaixo, temos uma função assíncrona (usando a palavra async), expressada como
// sendo uma Arrow Function.
//          Maneira 2
const getCats = async () => {
    const data = await fetch(BASE_URL)
     .then((res) => res.json())
     .catch((e) => console.log(e));
    return data.webpurl; // Imagem Retornada.
};

const loadImg = async () => {
    // Realizando um await no getCats. Ou seja, quando quisermos carregar uma imagem,
    // tem que retornar um await getCats.
    const catImg = document.getElementById('cat'); // Obtendo a referência de imagem, da página HTML (index.html),
    // que apresenta o id chamado cat.
    catImg.src = await getCats();
};

// Abaixo: É preciso colocar um Listener no Botão.
catBtn.addEventListener('click',loadImg);  // Evento de clique de botão. Ao clicar no botão, vai chamar
// o método loadImg.

loadImg(); // Quando a página HTML for aberta pela primeira vez, vai chamar este método para carregar uma
// imagem para ser exibida na página.