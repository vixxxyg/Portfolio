const btnDarkMode = document.querySelector(".dark-mode-btn");

function setDarkTheme() {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
}

function removeDarkTheme() {
    btnDarkMode.classList.remove("dark-mode-btn--active");
    document.body.classList.remove("dark");
}

// Comprobación del tema según la configuración del sistema del usuario.
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    setDarkTheme();
}

// Comprobación del tema en localStorage y configuración del mismo modo para las demás páginas.
if (localStorage.getItem("darkMode") === "dark") {
    setDarkTheme();
} else if (localStorage.getItem("darkMode") === "light") {
    removeDarkTheme();
}

// Ajuste del tema en caso de cambios en la configuración del sistema.
window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', (event) => {
    const newColorScheme = event.matches ? "dark" : "light";

    if (newColorScheme === "dark") {
        setDarkTheme();
        localStorage.setItem("darkMode", "dark");
    } else {
        removeDarkTheme();
        localStorage.setItem("darkMode", "light");
    }
})

// Activación del modo nocturno mediante un botón.
btnDarkMode.onclick = function () {
    console.log('Click');
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    const isDark = document.body.classList.toggle("dark");

    if (isDark) {
        localStorage.setItem("darkMode", "dark");
    } else {
        localStorage.setItem("darkMode", "light");
    }
}