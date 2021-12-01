const Username = document.querySelector("#UsernameField");
const text = document.querySelector("#text");
const SubmitButton = document.querySelector("#SubmitButton");

Username.addEventListener('input', letter => {
    text.textContent = letter.target.value;
})

const SaveToLocalStorage = () => {
    localStorage.setItem('Username', text.textContent);
}

SubmitButton.addEventListener('click', SaveToLocalStorage);