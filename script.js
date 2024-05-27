function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      const offset = 130; // Adjust this value according to your header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const targetRect = target.getBoundingClientRect().top;
      const targetPosition = targetRect - bodyRect;
      const offsetPosition = targetPosition - offset;

      window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
      });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const detailsContainers = document.querySelectorAll("#experience .details-container");

  function checkSlide() {
    const triggerBottom = window.innerHeight / 5 * 4;

    detailsContainers.forEach(container => {
      const boxTop = container.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        container.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", checkSlide);
  checkSlide(); // Run on page load in case elements are already in view
});

let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    document.querySelector('.slides').style.transform = `translateX(-${currentSlide * 100}%)`;
}

