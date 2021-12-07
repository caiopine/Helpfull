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

    UsersContainers = document.querySelectorAll(".UsersContainers");

    console.log(actualhref[1]);

    if (actualhref.includes("Helpfull.html") || actualhref.includes("timeline.html")) {
        UserPicture[0].setAttribute('src', "../files/database/projects/" + StoredName + "/profilepicture.jpg");
        UserPicture[1].setAttribute('src', "../files/database/projects/" + StoredName + "/profilepicture.jpg");
        UsersContainers[0].setAttribute('href', "../files/database/projects/" + StoredName + "/" + StoredName + ".html");
        UsersContainers[1].setAttribute('href', "../files/database/projects/" + StoredName + "/" + StoredName + ".html");
    }

    else {
        UserPicture[0].setAttribute('src', "../" + StoredName + "/profilepicture.jpg");
        UserPicture[1].setAttribute('src', "../" + StoredName + "/profilepicture.jpg");
        UsersContainers[0].setAttribute('href', StoredName + ".html");
        UsersContainers[1].setAttribute('href', StoredName + ".html");
    }
}

else {
    localStorage.setItem('Username', 'Usuário');
}