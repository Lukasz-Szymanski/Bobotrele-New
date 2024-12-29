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

  // Dodaj nasłuchiwacz do linku z obrazkiem
  const logoLink = document.querySelector("header a[href='#home']");
  logoLink.addEventListener("click", (event) => {
    event.preventDefault(); // Zablokuj domyślne działanie linku
    navigateTo("home"); // Przejdź do sekcji 'home'
  });

  // Domyślnie pokaż sekcję 'home' przy załadowaniu
  navigateTo("oferta");
});
