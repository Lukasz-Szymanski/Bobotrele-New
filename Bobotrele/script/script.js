// Funkcja do obsługi nawigacji
function navigateTo(sectionId) {
  // Ukryj wszystkie sekcje
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.style.display = "none";
  });

  // Pokaż wybraną sekcję
  const activeSection = document.getElementById(sectionId);
  if (activeSection) {
    activeSection.style.display = "block";
  }
}

// Dodaj nasłuchiwacze zdarzeń do linków nawigacyjnych
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");
  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // Zablokuj domyślne działanie linku
      const sectionId = link.getAttribute("href").substring(1); // Pobierz id sekcji
      navigateTo(sectionId); // Przejdź do sekcji
    });
  });

  // Domyślnie pokaż sekcję 'home' przy załadowaniu
  navigateTo("home");
});
