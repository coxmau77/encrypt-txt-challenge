// <Darkmode
const themeButton = document.getElementById('theme_button');
const darkTheme = 'dark-theme';
const selectedTheme = localStorage.getItem('selected-theme');
const userHasDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
// </Darkmode

let inputTxt = document.getElementById('input_txt');
let btnEncript = document.getElementById('btn_encript');
let btnDecript = document.getElementById('btn_decrypt');
let encryptedMessage = document.getElementById('encrypted_message');
let btnCopy = document.getElementById('btn_copy');
let emptyMessage = document.querySelector('.empty-message');
let displayMessage = document.querySelector('.display-message');

// <Darkmode
if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
} else {
    if (userHasDarkTheme) document.body.classList.add(darkTheme);
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    localStorage.setItem('selected-theme', getCurrentTheme());
});
// </Darkmode