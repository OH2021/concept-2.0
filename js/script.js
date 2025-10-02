document.addEventListener("DOMContentLoaded", function () {
  // --- Slideshow ---
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.getElementById("prevSlide");
  const nextBtn = document.getElementById("nextSlide");
  let current = 0;
  const total = slides.length;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) slide.classList.add("active");
    });
  }

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => {
      current = (current - 1 + total) % total;
      showSlide(current);
    });

    nextBtn.addEventListener("click", () => {
      current = (current + 1) % total;
      showSlide(current);
    });
  }

  setInterval(() => {
    current = (current + 1) % total;
    showSlide(current);
  }, 5000);

  showSlide(current);

  // --- Lightbox for klikkbare bilder ---
  const images = document.querySelectorAll(".clickable-image");

  // Lag overlay-element
  const overlay = document.createElement("div");
  overlay.classList.add("lightbox-overlay");
  const overlayImage = document.createElement("img");
  overlay.appendChild(overlayImage);
  document.body.appendChild(overlay);

  // Klikk på bilde
  images.forEach((img) => {
    img.addEventListener("click", () => {
      overlayImage.src = img.src;
      overlay.classList.add("show");
    });
  });

  // Klikk på overlay eller bildet for å lukke
  overlay.addEventListener("click", () => {
    overlay.classList.remove("show");
  });

  // --- Kontakt-skjema ---
  const form2 = document.getElementById("contactForm2");
  if (form2) {
    form2.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Takk for henvendelsen! Vi tar kontakt snart.");
      this.reset();
    });
  }

  const formPage = document.getElementById("contactFormPage");
  if (formPage) {
    formPage.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Takk for henvendelsen! Vi tar kontakt snart.");
      this.reset();
    });
  }
});
