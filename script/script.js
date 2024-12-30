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
      const href = link.getAttribute("href");
      if (href.endsWith(".pdf")) {
        // Jeśli link prowadzi do pliku PDF, otwórz go w nowej karcie
        window.open(href, "_blank");
        return; // Zakończ dalsze przetwarzanie
      }
      event.preventDefault(); // Zablokuj domyślne działanie linku
      const sectionId = href.substring(1); // Pobierz id sekcji
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
  navigateTo("home");
});

// Funkcja odpowiedzialna za pop-out
function showModal(modalId) {
  const modal = document.getElementById("modal");
  const message = {
    modal1: "Opis oferty 1.",
    modal2:
      "Muzykoterapia to zajęcia muzyczne, których celem jest regulacja emocji uczestników. Na zajęciach celem nie jest nauczenie się konkretnych piosenek czy umiejętności gry na instrumencie, ale poznanie własnych emocji, wzrost świadomości ciała oraz zbudowanie wiary w swoje umiejętności. To wszystko w formie zabaw muzycznych.",
    modal3: "Opis oferty 3.",
    modal4: "Opis oferty 4.",
    modal5: "Opis oferty 5.",
    modal6: "Opis oferty 6.",
  };
  document.getElementById("modal-message").innerText = message[modalId];
  modal.classList.remove("hidden");
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.add("hidden");
}
