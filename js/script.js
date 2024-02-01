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
let form = document.querySelector('form');
let passCrypto = "Clave_cifrado_y_descifrado@123#";

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

btnEncript.addEventListener("click", function(event) {
    event.preventDefault();
    if (/[A-ZÁÉÍÓÚÜÑ]/.test(inputTxt.value) || /[^a-z\s]/i.test(inputTxt.value) || inputTxt.value == "") {
        alert('El texto NO debe contener Mayúsculas ni Carateres especiales\nni estar vacío, intentalo nuevamente')
        emptyMessage.classList.remove('hide-content');
        displayMessage.classList.add('hide-content');
    } else {
        encryptedMessage.textContent = encriptMessage(inputTxt.value);

        emptyMessage.classList.add('hide-content');
        displayMessage.classList.remove('hide-content');
        decryptText(encryptedMessage.textContent)
    }

    form.reset();
});

btnDecript.addEventListener('click', function(event){
    event.preventDefault();
    console.log('click en desencriptar: '+decryptText(encryptedMessage.textContent))
    encryptedMessage.innerText = decryptText(encryptedMessage.textContent);
    form.reset()
});

btnCopy.addEventListener('click', function() {
    copyTextContent();
});

// Función para encriptar texto con AES
function encriptMessage(txt) {
    let encrypted = CryptoJS.AES.encrypt(txt, passCrypto);
    return encrypted.toString();
}

// Función para desencriptar texto con AES
function decryptText(encryptedText) {
    var decrypted = CryptoJS.AES.decrypt(encryptedText, passCrypto).toString(CryptoJS.enc.Utf8);
    return decrypted;
}

// Usar el API de Clipboard para copiar el texto
function copyTextContent() {
    navigator.clipboard.writeText(encryptedMessage.textContent).then(function () {
        console.log(`Texto copiado (${encryptedMessage.textContent}) al porta papeles`);
    }).catch(function (err) {
        console.error('No se pudo copiar el texto al portapapeles', err);
    });
}