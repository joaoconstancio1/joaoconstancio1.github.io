const switchToggle = document.getElementById('theme-switch');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
    document.body.classList.add('dark');
    switchToggle.checked = true;
}

switchToggle.addEventListener('change', () => {
    if (switchToggle.checked) {
        document.body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
});
