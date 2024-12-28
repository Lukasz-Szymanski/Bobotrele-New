// Obsługa nawigacji SPA
document.addEventListener("DOMContentLoaded", () => {
  // Ukryj wszystkie sekcje oprócz home na starcie
  const sections = document.querySelectorAll("section:not(#home)");
  const homeSection = document.querySelector("#home");
  sections.forEach((section) => {
    section.style.display = "none";
  });

  // Obsługa kliknięcia w logo
  document.querySelector('a[href="#home"]').addEventListener("click", (e) => {
    e.preventDefault();
    // Pokaż home, ukryj resztę
    homeSection.style.display = "block";
    sections.forEach((section) => {
      section.style.display = "none";
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Obsługa kliknięć w linki nawigacyjne
  document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", (e) => {
      // Pomijamy link do regulaminu, który otwiera się w nowym oknie
      if (!link.getAttribute("target")) {
        e.preventDefault();
        const sectionId = link.getAttribute("href");

        // Ukryj wszystkie sekcje oprócz wybranej
        sections.forEach((section) => {
          section.style.display = "none";
        });

        // Ukryj również home przy pokazywaniu innych sekcji
        homeSection.style.display = "none";

        // Pokaż wybraną sekcję
        const selectedSection = document.querySelector(sectionId);
        if (selectedSection) {
          selectedSection.style.display = "block";
          selectedSection.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });
});
