/* ================================================
   ABOUT PAGE JAVASCRIPT — about.js
   
   Handles all interactivity on about.html.
   Reuses the same dark mode, navbar, back-to-top,
   and scroll animation logic as main.js — but as
   a standalone file since about.html is a separate
   page that doesn't load main.js.
================================================ */


/* ================================================
   DOM REFERENCES
================================================ */
const navbar         = document.getElementById('navbar');
const hamburger      = document.getElementById('hamburger');
const mobileMenu     = document.getElementById('mobileMenu');
const darkModeToggle = document.getElementById('darkModeToggle');
const darkModeIcon   = document.getElementById('darkModeIcon');
const backToTop      = document.getElementById('backToTop');


/* ================================================
   DARK MODE
   (identical logic to main.js)
================================================ */
function applyTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    darkModeIcon.className = 'ri-sun-line';
    darkModeToggle.setAttribute('aria-label', 'Switch to light mode');
  } else {
    document.documentElement.removeAttribute('data-theme');
    darkModeIcon.className = 'ri-moon-line';
    darkModeToggle.setAttribute('aria-label', 'Switch to dark mode');
  }
}

function initDarkMode() {
  const saved = localStorage.getItem('theme');
  if (saved) {
    applyTheme(saved);
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');
  }
}

darkModeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  localStorage.setItem('theme', next);
});


/* ================================================
   NAVBAR
================================================ */
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.contains('is-open');
  mobileMenu.classList.toggle('is-open', !isOpen);
  hamburger.setAttribute('aria-expanded', String(!isOpen));
  hamburger.querySelector('i').className = isOpen ? 'ri-menu-line' : 'ri-close-line';
});

mobileMenu.querySelectorAll('.mobile-menu__link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.querySelector('i').className = 'ri-menu-line';
  });
});

document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target)) {
    mobileMenu.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.querySelector('i').className = 'ri-menu-line';
  }
});


/* ================================================
   SCROLL ANIMATIONS
================================================ */
function addRevealClasses() {
  document.querySelectorAll('.section-header').forEach(el => el.classList.add('reveal'));
  document.querySelectorAll('.how-card').forEach((el, i) => {
    el.classList.add('reveal');
    if (i < 3) el.classList.add(`reveal-delay-${i + 1}`);
  });
  document.querySelectorAll('.tech-card').forEach((el, i) => {
    el.classList.add('reveal');
    if (i < 3) el.classList.add(`reveal-delay-${i + 1}`);
  });
  document.querySelectorAll('.about-stat-card').forEach((el, i) => {
    el.classList.add('reveal');
    if (i < 3) el.classList.add(`reveal-delay-${i + 1}`);
  });
  const tsaContent = document.querySelector('.about-tsa__content');
  if (tsaContent) tsaContent.classList.add('reveal');
  const tsaSkills = document.querySelector('.about-tsa__skills');
  if (tsaSkills) { tsaSkills.classList.add('reveal'); tsaSkills.classList.add('reveal-delay-2'); }
  const missionText = document.querySelector('.about-mission__text');
  if (missionText) missionText.classList.add('reveal');
}

function initScrollAnimations() {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { root: null, rootMargin: '0px 0px -40px 0px', threshold: 0.05 });

  document.querySelectorAll('.reveal').forEach(el => {
    const rect = el.getBoundingClientRect();
    const inViewport = rect.top < window.innerHeight && rect.bottom > 0;
    if (inViewport) {
      setTimeout(() => el.classList.add('is-visible'), 100);
    } else {
      observer.observe(el);
    }
  });
}


/* ================================================
   BACK TO TOP
================================================ */
function initBackToTop() {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTop.hidden = false;
      requestAnimationFrame(() => backToTop.classList.add('visible'));
    } else {
      backToTop.classList.remove('visible');
      setTimeout(() => { if (window.scrollY <= 400) backToTop.hidden = true; }, 300);
    }
  }, { passive: true });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}


/* ================================================
   INIT
================================================ */
function init() {
  initDarkMode();
  addRevealClasses();
  initScrollAnimations();
  initBackToTop();
}

document.addEventListener('DOMContentLoaded', init);