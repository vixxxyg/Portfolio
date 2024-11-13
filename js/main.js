console.log('hi');

const btnDarkMode = document.querySelector(".dark-mode-btn");

btnDarkMode.onclick = function () {
    console.log('Click');
    btnDarkMode.classList.toggle("dark-mode-btn--active");
}