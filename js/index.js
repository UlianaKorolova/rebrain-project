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