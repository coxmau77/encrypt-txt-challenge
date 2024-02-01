const themeButton = document.getElementById('theme_button');
const darkTheme = 'dark-theme';
const selectedTheme = localStorage.getItem('selected-theme');
const userHasDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
} else {
    if (userHasDarkTheme) document.body.classList.add(darkTheme);
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    localStorage.setItem('selected-theme', getCurrentTheme());
});