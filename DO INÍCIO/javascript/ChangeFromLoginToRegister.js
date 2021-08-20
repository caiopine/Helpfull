/* DECLARAÇÃO DAS VARIÁVEIS */
const LoginField = document.getElementById('LoginField');
const RegisterField = document.getElementById('RegisterField');
const RegisterAndLoginButton = document.getElementById('RegisterAndLoginButton');
var FieldSelected = 1;

RegisterAndLoginButton.onclick = ChangeFromLoginToRegister;

function ChangeFromLoginToRegister() {
    /* TROCAR PARA TELA DE LOGIN */
    if (FieldSelected == 0) {
        /* MUDANÇA PARA PODER APERTAR O BOTÃO NOVAMENTE */
        FieldSelected = 1;

        /* ESCONDE A TELA DE REGISTRO E MOSTRA A DE LOGIN */
        RegisterField.style.setProperty('display', 'none');
        LoginField.style.setProperty('display', 'block');
        RegisterAndLoginButton.innerHTML = 'Criar nova conta';
    }
    /* TROCAR PARA A TELA DE REGISTRO */
    else {
        /* MUDANÇA PARA PODER APERTAR O BOTÃO NOVAMENTE */
        FieldSelected = 0;

        /* ESCONDE A TELA DE LOGIN E MOSTRA A DE REGISTRO */
        LoginField.style.setProperty('display', 'none');
        RegisterField.style.setProperty('display', 'block');
        RegisterAndLoginButton.innerHTML = 'Entrar com sua conta';
    }
}