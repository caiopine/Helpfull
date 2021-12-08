const Username = document.querySelector("#UsernameField");
const text = document.querySelector("#text");
const SubmitButton = document.querySelector("#SubmitButton");

Username.addEventListener('input', letter => {
    text.textContent = letter.target.value;
})

const SaveToLocalStorage = () => {
    localStorage.setItem('Logged', "1");
    localStorage.setItem('Username', text.textContent);
}

function SetLogged0 () {
    localStorage.setItem('Logged', '0');
}

SubmitButton.addEventListener('click', SaveToLocalStorage);