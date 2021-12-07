var Logged = localStorage.getItem('Logged');
var StoredName; var UserNameReceptor;

var actualhref = window.location.href.split("/");

if (Logged == 1) {
    /* TROCA DO NOME DE PERFIL */
    StoredName = localStorage.getItem('Username');
    UserNameReceptor = document.querySelectorAll(".UserName");
    UserNameReceptor[0].innerText = StoredName;
    UserNameReceptor[1].innerText = StoredName;

    /* TROCA DA FOTO DE PERFIL */
    UserPicture = document.querySelectorAll('.UserPicture');

    if (actualhref[7] == "Helpfull.html" || actualhref[7] == "timeline.html") {
        UserPicture[0].setAttribute('src', "../files/database/projects/" + StoredName + "/profilepicture.jpg");
        UserPicture[1].setAttribute('src', "../files/database/projects/" + StoredName + "/profilepicture.jpg");
    }

    else {  
        UserPicture[0].setAttribute('src', "profilepicture.jpg");
        UserPicture[1].setAttribute('src', "profilepicture.jpg");
    }

    /* TROCA DO REDIRECIONAMENTO DO PERFIL */
    UsersContainers = document.querySelectorAll(".UsersContainers");
    UsersContainers[0].setAttribute('href', "../files/database/projects/" + StoredName + "/" + StoredName + ".html");
    UsersContainers[1].setAttribute('href', "../files/database/projects/" + StoredName + "/" + StoredName + ".html");
}

else {
    localStorage.setItem('Username', 'Usuário');
}