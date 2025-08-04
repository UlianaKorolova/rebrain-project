const nav = document.getElementById('main-nav');
let lastScrollY = window.scrollY;
const threshold = 50;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    // Ako je prošao threshold, dodaj pozadinu
    if (currentScrollY > threshold) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }

    // Ne radi ništa ako nismo prošli threshold
    if (currentScrollY <= threshold) {
        nav.classList.remove('hidden');
        lastScrollY = currentScrollY;
        return;
    }

    // Ako smo prošli threshold i razlika je dovoljna, reaguj
    if (Math.abs(currentScrollY - lastScrollY) > 10) {
        if (currentScrollY > lastScrollY) {
            nav.classList.add('hidden');
        } else {
            nav.classList.remove('hidden');
        }
        lastScrollY = currentScrollY;
    }
});



 const track = document.querySelector('.slider-track');
  const dotsContainer = document.querySelector('.slider-dots');
  const slides = document.querySelectorAll('.slide');
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');

  let currentSlide = 0;

  function updateSlider() {
    const offset = -currentSlide * 100;
    track.style.transform = `translateX(${offset}%)`;
    updateDots();
  }

  function updateDots() {
    dotsContainer.innerHTML = '';
    slides.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.classList.toggle('active', index === currentSlide);
      dot.addEventListener('click', () => {
        currentSlide = index;
        updateSlider();
      });
      dotsContainer.appendChild(dot);
    });
  }

  prev.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlider();
  });

  next.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
  });

  // Initial render
  updateSlider();