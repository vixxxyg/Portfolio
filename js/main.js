const btnDarkMode = document.querySelector(".dark-mode-btn");

function correctThemeMode() {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
}

// Comprobación del tema en localStorage y configuración del mismo modo para las demás páginas.
if (localStorage.getItem('darkMode') === 'dark') {
    correctThemeMode();
}

// Comprobación del tema según la configuración del sistema del usuario.
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    correctThemeMode();
}


// Activación del modo nocturno mediante un botón.
btnDarkMode.onclick = function () {
    console.log('Click');
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    const isDark = document.body.classList.toggle("dark");

    if (isDark) {
        localStorage.setItem('darkMode', 'dark')
    } else {
        localStorage.setItem('darkMode', 'light')
    }
}