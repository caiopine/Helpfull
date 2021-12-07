var Logged = localStorage.getItem('Logged');
var StoredName; var UserNameReceptor; var InUserProfile;

function ChangeData() {
    if (Logged == 1) {
        /* TROCA DO NOME DE PERFIL */
        StoredName = localStorage.getItem('Username');
        UserNameReceptor = document.querySelectorAll(".UserName");
        UserNameReceptor[0].innerText = StoredName;
        UserNameReceptor[1].innerText = StoredName;

        /* TROCA DA FOTO DE PERFIL */
        UserPicture = document.querySelectorAll('.UserPicture');
        UserPicture[0].setAttribute('src', "../files/database/projects/" + StoredName + "/profilepicture.jpg");
        UserPicture[1].setAttribute('src', "../files/database/projects/" + StoredName + "/profilepicture.jpg")

        /* TROCA DO REDIRECIONAMENTO DO PERFIL */
        UsersContainers = document.querySelectorAll(".UsersContainers");
        console.log(UsersContainers);
        UsersContainers[0].setAttribute('href', "../files/database/projects/" + StoredName + "/" + StoredName + ".html");
        UsersContainers[1].setAttribute('href', "../files/database/projects/" + StoredName + "/" + StoredName + ".html");
    }

    else {
        localStorage.setItem('Username', 'Usuário');
    }
}