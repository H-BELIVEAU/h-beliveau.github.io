// ==========================================
// 1. SÉLECTION DES ÉLÉMENTS
// ==========================================

const themeButton = document.querySelector("#theme-toggle");
const themeIcon = document.querySelector("#theme-icon");
const languageButton = document.querySelector("#language-toggle");
const languageIcon = document.querySelector("#language-icon");

const path = "../".repeat(document.location.pathname.split("/").length - 2); 


// ==========================================
// 2. GESTION DU THÈME CLAIR / SOMBRE
// ==========================================

function setTheme(theme) {
    document.documentElement.dataset.theme = theme;

    if (theme === "dark") {
        themeIcon.setAttribute("aria-label", "Activer le thème clair");
        themeIcon.setAttribute("title", "Activer le thème clair");
        themeIcon.src = path+"assets/icons/moon-svgrepo-com.svg";
    } else {
        themeIcon.setAttribute("aria-label", "Activer le thème sombre");
        themeIcon.setAttribute("title", "Activer le thème sombre");
        themeIcon.src = path+"assets/icons/sun-svgrepo-com.svg";
    }

    localStorage.setItem("theme", theme);
}

themeButton.addEventListener("click", () => {
    const currentTheme = document.documentElement.dataset.theme || "dark";
    setTheme(currentTheme === "dark" ? "light" : "dark");
});

// Restaurer le thème sauvegardé
setTheme(localStorage.getItem("theme") || "dark");


// ==========================================
// 3. GESTION DU FRANÇAIS / ANGLAIS
// ==========================================

function setLanguage(language) {
    document.documentElement.lang = language;

    // Traduire les éléments possédant les deux attributs
    document.querySelectorAll("[data-fr][data-en]").forEach(element => {
        element.innerHTML = element.dataset[language];
    });

    // Afficher le drapeau correspondant à la langue
    if (language === "fr") {
        languageButton.setAttribute("aria-label", "Passer en anglais");
        languageButton.setAttribute("title", "Switch to English");
        languageIcon.src = "https://kapowaz.github.io/circle-flags/flags/fr.svg";
    } else {
        languageButton.setAttribute("aria-label", "Switch to French");
        languageButton.setAttribute("title", "Passer en français");
        languageIcon.src = "https://kapowaz.github.io/circle-flags/flags/ca.svg";
    }

    localStorage.setItem("language", language);
}

languageButton.addEventListener("click", () => {
    const currentLanguage = document.documentElement.lang || "fr";
    setLanguage(currentLanguage === "fr" ? "en" : "fr");
});

// Restaurer la langue sauvegardée
setLanguage(localStorage.getItem("language") || "fr");