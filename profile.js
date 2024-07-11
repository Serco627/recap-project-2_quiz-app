// Selektoren für die Elemente
const darkModeToggle = document.querySelector("#switch-darkmode");
const aboutMe = document.querySelector(".profile");
const aboutMeContainer = document.querySelector(".about-me-container");
const aboutMeHeader = document.querySelector(".aboutme");
const toggleDarkModeText = document.querySelector(
  ".profile__settings-darkmode-label"
);
console.log(aboutMeHeader, toggleDarkMode);

// Funktion zum Umschalten des Darkmodes
function toggleDarkMode() {
  if (darkModeToggle.checked) {
    aboutMe.classList.add("darkmode");
    aboutMeContainer.style.color = "var(--secondary-light)"; // Setzt die Farbe des Containers im Darkmode
    aboutMeHeader.style.color = "var(--secondary-light)";
    toggleDarkModeText.style.color = "var(--secondary-light)";
  } else {
    aboutMe.classList.remove("darkmode");
    aboutMeContainer.style.color = "inherit"; // Setzt die Farbe des Containers auf Standard
    aboutMeHeader.style.color = "inherit";
    toggleDarkModeText.style.color = "inherit";
  }
}

// Event-Listener für die Checkbox hinzufügen
darkModeToggle.addEventListener("change", toggleDarkMode);

// Initialen Zustand der Checkbox setzen
function initializeDarkMode() {
  const isChecked = darkModeToggle.checked;
  if (isChecked) {
    aboutMe.classList.add("darkmode");
    aboutMeContainer.style.color = "var(--secondary-light)"; // Setzt die Farbe des Containers im Darkmode
  } else {
    aboutMe.classList.remove("darkmode");
    aboutMeContainer.style.color = "inherit"; // Setzt die Farbe des Containers auf Standard
  }
}

// Überprüfen des Darkmode-Status beim Laden der Seite
window.addEventListener("load", initializeDarkMode);
