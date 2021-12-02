var UserNameRecept = document.querySelector(".UserName");
var StoredName = localStorage.getItem('Username');

UserNameRecept.innerText = StoredName;

