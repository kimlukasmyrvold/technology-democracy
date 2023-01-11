// dark and light theme code

// Here it reads what the theme currently is, it reads from the localstorage.
const currentTheme = localStorage.getItem("theme");

// Changes the theme when the page loads
if (currentTheme == "light") {
    document.body.classList.add("light");
    document.getElementById("light-theme-btn").classList.add("underline");
}
else {
    document.body.classList.remove("light");
    document.getElementById("dark-theme-btn").classList.add("underline");
};

// Changes the theme of the site to light when user clicks button, and saves theme to localstorage
function theme_btn_light() {
    document.body.classList.add("light");
    document.getElementById("light-theme-btn").classList.add("underline");
    document.getElementById("dark-theme-btn").classList.remove("underline");

    let theme = "light";
    localStorage.setItem("theme", theme);
};

// Changes the theme of the site to dark when user clicks button, and saves theme to localstorage
function theme_btn_dark() {
    document.body.classList.remove("light");
    document.getElementById("dark-theme-btn").classList.add("underline");
    document.getElementById("light-theme-btn").classList.remove("underline");

    let theme = "dark";
    localStorage.setItem("theme", theme);
};

// End of dark / light mode code


// Navbar
const overlay = document.querySelector('.overlay');

const appearance_btn = document.querySelector('.appearance');
const appearance_drop = document.querySelector('.appearance-drop')

overlay.addEventListener('click', function () {
    appearance_drop.classList.add('hidden');
    overlay.classList.add('hidden');
});

appearance_btn.addEventListener('click', () => {
    appearance_drop.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
});

// End of navbar