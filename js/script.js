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

const menu_btn = document.querySelector('.hamburger');
const appearance_btn = document.querySelector('.appearance');

const appearance_drop = document.querySelector('.appearance-drop');


let navigation_open = false;
let appearance_open = false;


overlay.addEventListener('click', function () {
    appearance_drop.classList.add('hidden');
    appearance_open = false;

    overlay.classList.add('hidden');
});


appearance_btn.addEventListener('click', () => {
    if (appearance_open === false) {
        appearance_open = true;
        appearance_drop.classList.remove('hidden');

        menu_btn.classList.remove('is-active');
        navigation.classList.remove('flex');

        overlay.classList.remove('hidden');
    }
    else {
        appearance_open = false
        appearance_drop.classList.add('hidden');

        overlay.classList.add('hidden');
    };
});

menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active');
    navigation.classList.toggle('flex');

    appearance_open = false
    appearance_drop.classList.add('hidden');

    overlay.classList.add('hidden');
});

// End of navbar