window.onload = function (){
    /* DECLARAÇÃO DAS VARIÁVEIS */
    const Body = document.querySelector('body')
    const ColorMode = document.getElementById('ColorMode');
    const Logo = document.querySelector('img');

    /* 0 = Dark Mode; 1 = Light Mode; */
    var ColorModeSelection = 0;

    ColorMode.onclick = ColorScheme;

    function ColorScheme(){
        if (ColorModeSelection == 0){
            ColorModeSelection = 1;
            /* TROCA DAS CORES */
            
            Body.style.setProperty('--background-color', '#333333');
            Body.style.setProperty('--box-shadow', 'black');
            Body.style.setProperty('--primary-text-color', 'white');
            Body.style.setProperty('--primary-icons-color', 'white');
            Body.style.setProperty('--hover-icons-color', 'gray');
            Body.style.setProperty('--hover-language-color', '#505050');
            /* INVERTE A COR DO LOGO */
            Logo.src="../files/logo/WhiteLogo.png";
            /* COLOCA UMA TRANSIÇÃO */
            Body.style.setProperty('transition', '0.5s');
        }

        else if (ColorModeSelection == 1) {

        }

        else {
            ColorModeSelection = 1;
            ColorScheme();
        }
    }
}