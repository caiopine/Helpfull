/* ABRIR A LISTA DE IDIOMAS */
    /* VARIÁVEIS */
    const LanguageListButton = document.getElementById('LanguageListButton');
    const LanguageList = document.getElementById('LanguageList');

    LanguageListButton.onclick = OpenLangList;
    function OpenLangList() {
        if (getComputedStyle(LanguageList).getPropertyValue('visibility') == 'hidden') {
            LanguageList.style.setProperty('visibility', 'visible');
        }

        else {
            LanguageList.style.setProperty('visibility', 'hidden');
        }
    }

/* TROCAR O IDIOMA */
    /* OPÇÕES DE LÍNGUAS */
    const PTBR = document.getElementById('PT-BR');
    const ENUS = document.getElementById('EN-US');
    const ES = document.getElementById('ES');
    /* VARIÁVEIS */
        /* LEFT-HEADER */
        const WelcomeTitle = document.getElementById('WelcomeTitle');
        const PresentationText = document.getElementById('PresentationText');
        const LearnMoreButton = document.getElementById('LearnMoreButton');
        /* RIGHT-HEADER */
        const LoginFieldInputs = document.querySelectorAll('input');
        const LoginButton = document.getElementById('LoginButton');
        const ForgotText = document.getElementById('ForgetText');
        const RegisterButton = document.getElementById('RegisterButton');
        const BrowseAnonymously = document.getElementById('BrowseAnonymously');

    /* AÇÕES AO CLICAR NO BOTÃO */
        /* PT-BR */
        PTBR.onclick = PTBRchange;
        function PTBRchange() {
            WelcomeTitle.innerText = 'Bem Vindo';
            PresentationText.innerHTML = "A Helpfull é uma plataforma com <br> a missão de mudar o mundo, e <br> você é o protagonista nesta jornada.";
            LearnMoreButton.innerText = "saiba como";
            LoginFieldInputs[0].setAttribute('Placeholder', 'Email ou usuário');
            LoginFieldInputs[1].setAttribute('Placeholder', 'Senha');
            LoginButton.innerText = 'Entrar';
            ForgotText.innerText = 'Esqueceu algo?';
            RegisterButton.innerText = 'Criar nova conta';
            BrowseAnonymously.innerText = 'Navegar Anonimamente';
        }

        /* EN-US */
        ENUS.onclick = ENUSchange;
        function ENUSchange() {
            WelcomeTitle.innerHTML = 'Welcome';
            PresentationText.innerHTML = "Helpfull is an plataform with the <br> mission of change the world <br> you are the protagonist in this journey.";
            LearnMoreButton.innerText = "learn how";
            LoginFieldInputs[0].setAttribute('Placeholder', 'Email or user');
            LoginFieldInputs[1].setAttribute('Placeholder', 'Password');
            LoginButton.innerText = 'Login';
            ForgotText.innerText = 'Forgot something?';
            RegisterButton.innerText = 'Create a new account';
            BrowseAnonymously.innerText = 'Browse Anonymously';
        }

        /* ES */
        ES.onclick = ESchange;
        function ESchange() {
            WelcomeTitle.innerHTML = 'Bienvenido';
            PresentationText.innerHTML = "Helpfull es una plataforma con <br> la misión de cambiar el mundo, y <br> eres el protagonista de este viaje.";
            LearnMoreButton.innerText = "sepa cómo";
            LoginFieldInputs[0].setAttribute('Placeholder', 'Correo electrónico o usuario');
            LoginFieldInputs[1].setAttribute('Placeholder', 'Contraseña');
            LoginButton.innerText = 'Iniciar sesión';
            ForgotText.innerText = '¿Olvidaste algo?';
            RegisterButton.innerText = 'Crear una nueva cuenta';
            BrowseAnonymously.innerText = 'Navegar de forma anónima';
        }