var Logged = localStorage.getItem('Logged');
var StoredName; var UserNameReceptor; var InUserProfile;

if (Logged == 1) {
    /* TROCA DO NOME DE PERFIL */
    StoredName = localStorage.getItem('Username');
    UserNameReceptor = document.querySelectorAll(".UserName");
    UserNameReceptor[0],[1].innerText = StoredName;

    /* TROCA DA FOTO DE PERFIL */
    UserPicture = document.querySelectorAll('.UserPicture');
    UserPicture[0],[1].setAttribute('src', "../files/database/projects/" + StoredName + "/profilepicture.jpg")

    /* TROCA DO REDIRECIONAMENTO DO PERFIL */
    UsersContainers = document.querySelectorAll(".UsersContainers");
    console.log(UsersContainers);
    UsersContainers[0],[1].setAttribute('href', "../files/database/projects/" + StoredName + "/" + StoredName + ".html");
}

else {
    localStorage.setItem('Username', 'Usuário');

}
