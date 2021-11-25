/* DECLARAÇÃO DAS VARIÁVEIS */
const Body = document.querySelector('body');
const ColorMode = document.getElementById('ColorModeButton');
const Logo = document.querySelector('img');
/* 0 = Dark Mode; 1 = Light Mode; */
var ColorModeSelection = 1;

ColorMode.onclick = ColorScheme;

function ColorScheme(){

    if (ColorModeSelection == 1){
        /* MUDANÇA PARA PODER APERTAR O BOTÃO NOVAMENTE */
        ColorModeSelection = 0;

        /* TROCA DAS CORES */
        Body.style.setProperty('--background-color', '#333333');
        Body.style.setProperty('--shadow-color', 'rgb(25, 25, 25)');
        Body.style.setProperty('--primary-text-color', 'white');
        Body.style.setProperty('--secundary-text-color', 'gray')
        Body.style.setProperty('--primary-icons-color', 'white');
        Body.style.setProperty('--hover-icons-color', 'gray');
        Body.style.setProperty('--hover-language-color', '#505050');
        Body.style.setProperty('--placeholder-color', '#dddddd');
        Body.style.setProperty('--header-color', '#2c2c2c');
        Body.style.setProperty('--header-second-color', '#3c3c3c'); 
        
        /* COLOCA UMA TRANSIÇÃO */
        Body.style.setProperty('transition', '0.5s');
        Body.style.setProperty('delay', '2s');
    }

    else {
        /* MUDANÇA PARA PODER APERTAR O BOTÃO NOVAMENTE */
        ColorModeSelection = 1;

        /* TROCA DAS CORES */
        Body.style.setProperty('--background-color', 'rgb(245, 245, 245)');
        Body.style.setProperty('--shadow-color', 'rgb(200, 200, 200)');
        Body.style.setProperty('--primary-text-color', 'black');
        Body.style.setProperty('--primary-icons-color', 'gray');
        Body.style.setProperty('--hover-icons-color', '#333333');
        Body.style.setProperty('--hover-language-color', 'rgb(210, 210, 210)');
        Body.style.setProperty('--placeholder-color', 'gray');
        Body.style.setProperty('--header-color', 'white')
        Body.style.setProperty('--header-second-color', 'rgb(230, 230, 230)'); 

        /* COLOCA UMA TRANSIÇÃO */
        Body.style.setProperty('transition', '0.5s');
        Body.style.setProperty('delay', '2s');
    }
}