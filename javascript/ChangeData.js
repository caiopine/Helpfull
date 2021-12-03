var Logged = localStorage.getItem('Logged');
var StoredName; var UserNameReceptor;

if (Logged == 1) {
    /* TROCA DO NOME DE PERFIL */
    StoredName = localStorage.getItem('Username');
    UserNameReceptor = document.querySelectorAll(".UserName");
    UserNameReceptor[0].innerText = StoredName;
    UserNameReceptor[1].innerText = StoredName;

    /* TROCA DO REDIRECIONAMENTO DO PERFIL */
    UsersContainers = document.querySelectorAll(".UsersContainers");
    console.log(UsersContainers);  
    UsersContainers[0].setAttribute('href', "../files/database/projects/" + StoredName + "/" + StoredName + ".html");
    UsersContainers[1].setAttribute('href', "../files/database/projects/" + StoredName + "/" + StoredName + ".html");
}

else {

}
