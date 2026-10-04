// ==========================================
// 1. SÉLECTION DES ÉLÉMENTS
// ==========================================

const themeButton = document.querySelector("#theme-toggle");
const themeIcon = document.querySelector("#theme-icon");
const languageButton = document.querySelector("#language-toggle");
const languageIcon = document.querySelector("#language-icon");


// ==========================================
// 2. GESTION DU THÈME CLAIR / SOMBRE
// ==========================================

function setTheme(theme) {
    document.documentElement.dataset.theme = theme;

    if (theme === "dark") {
        // Icône lune
        themeIcon.innerHTML = `
            <path d="M20.9 13A9 9 0 0 1 11 3.1
                     9 9 0 1 0 20.9 13Z"/>
        `;
        themeButton.setAttribute("aria-label", "Activer le thème clair");
        themeButton.setAttribute("title", "Activer le thème clair");
    } else {
        // Icône soleil
        themeIcon.innerHTML = `
            <circle cx="12" cy="12" r="4"/>
            <path d="M12 2v2m0 16v2
                     M4.93 4.93l1.42 1.42
                     m11.3 11.3 1.42 1.42
                     M2 12h2m16 0h2
                     M4.93 19.07l1.42-1.42
                     m11.3-11.3 1.42-1.42"/>
        `;
        themeButton.setAttribute("aria-label", "Activer le thème sombre");
        themeButton.setAttribute("title", "Activer le thème sombre");
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
        languageIcon.src = "assets/icons/Flag_of_France.svg";
    } else {
        languageButton.setAttribute("aria-label", "Switch to French");
        languageButton.setAttribute("title", "Passer en français");
        languageIcon.src = "assets/icons/Flag_of_Canada.svg";
    }

    localStorage.setItem("language", language);
}

languageButton.addEventListener("click", () => {
    const currentLanguage = document.documentElement.lang || "fr";
    setLanguage(currentLanguage === "fr" ? "en" : "fr");
});

// Restaurer la langue sauvegardée
setLanguage(localStorage.getItem("language") || "fr");