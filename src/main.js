/* ================================================
   ASHBURN COMMUNITY RESOURCE HUB
   main.js — All JavaScript Logic (Fixed)

   TABLE OF CONTENTS:
   1.  Imports
   2.  DOM Element References
   3.  Application State
   4.  Dark Mode
   5.  Navbar (scroll + mobile menu)
   6.  Card Rendering
   7.  Filtering Logic
   8.  Search Bar Logic
   9.  Category Filter Buttons
   10. Form Validation & Submission
   11. Scroll Animations (IntersectionObserver)
   12. Back To Top Button
   13. Stats Counter Animation
   14. Anchor Links
   15. Initialisation
================================================ */


/* ================================================
   1. IMPORTS
================================================ */
import { RESOURCES, CATEGORY_META } from './data.js';


/* ================================================
   2. DOM ELEMENT REFERENCES
================================================ */
const navbar          = document.getElementById('navbar');
const hamburger       = document.getElementById('hamburger');
const mobileMenu      = document.getElementById('mobileMenu');
const darkModeToggle  = document.getElementById('darkModeToggle');
const darkModeIcon    = document.getElementById('darkModeIcon');

const searchInput     = document.getElementById('searchInput');
const searchClear     = document.getElementById('searchClear');
const resourceGrid    = document.getElementById('resourceGrid');
const resultsNumber   = document.getElementById('resultsNumber');
const noResults       = document.getElementById('noResults');
const resetSearch     = document.getElementById('resetSearch');

const filterButtons   = document.querySelectorAll('.filter-btn');

const resourceForm    = document.getElementById('resourceForm');
const formSuccess     = document.getElementById('formSuccess');
const submitAnother   = document.getElementById('submitAnother');

const fieldResName     = document.getElementById('resName');
const fieldResCategory = document.getElementById('resCategory');
const fieldResDesc     = document.getElementById('resDesc');
const fieldResLink     = document.getElementById('resLink');
const fieldResEmail    = document.getElementById('resEmail');

const errResName       = document.getElementById('resNameError');
const errResCategory   = document.getElementById('resCategoryError');
const errResDesc       = document.getElementById('resDescError');
const errResLink       = document.getElementById('resLinkError');
const errResEmail      = document.getElementById('resEmailError');

const backToTop        = document.getElementById('backToTop');
const statTotal        = document.getElementById('statTotal');


/* ================================================
   3. APPLICATION STATE
================================================ */
const state = {
  activeCategory: 'all',
  searchQuery: '',
};


/* ================================================
   4. DARK MODE
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
   5. NAVBAR
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
   6. CARD RENDERING
================================================ */
function getCategorySlug(category) {
  const slugMap = {
    'Food Assistance':   'food',
    'Health Services':   'health',
    'Youth & Education': 'youth',
    'Housing & Shelter': 'housing',
    'Support Services':  'support',
    'Community Events':  'events',
  };
  return slugMap[category] || 'support';
}

function createCardHTML(resource) {
  const meta = CATEGORY_META[resource.category];

  const phoneHTML = resource.phone
    ? `<div class="resource-card__meta-item">
         <i class="ri-phone-line" aria-hidden="true"></i>
         <span>${resource.phone}</span>
       </div>`
    : '';

  const addressHTML = resource.address
    ? `<div class="resource-card__meta-item">
         <i class="ri-map-pin-line" aria-hidden="true"></i>
         <span>${resource.address}</span>
       </div>`
    : '';

  const websiteHTML = resource.website
    ? `<a
         href="${resource.website}"
         class="resource-card__link"
         target="_blank"
         rel="noopener noreferrer"
         aria-label="Visit ${resource.name} website (opens in new tab)"
       >
         Visit Website
         <i class="ri-external-link-line" aria-hidden="true"></i>
       </a>`
    : '';

  return `
    <div class="resource-card__header">
      <span class="resource-card__badge ${meta.badgeClass}">${resource.category}</span>
      <div class="resource-card__icon ${meta.iconClass}" aria-hidden="true">
        <i class="${meta.icon}"></i>
      </div>
    </div>
    <h3 class="resource-card__name">${resource.name}</h3>
    <p class="resource-card__desc">${resource.description}</p>
    <div class="resource-card__meta">
      ${phoneHTML}
      ${addressHTML}
    </div>
    ${websiteHTML}
  `;
}

function renderCards(resources) {
  resourceGrid.innerHTML = '';
  resultsNumber.textContent = resources.length;

  if (resources.length === 0) {
    noResults.hidden = false;
    resourceGrid.style.display = 'none';
    return;
  }

  noResults.hidden = true;
  resourceGrid.style.display = '';

  resources.forEach((resource, index) => {
    const card = document.createElement('article');
    card.className = 'resource-card';
    card.setAttribute('role', 'listitem');
    card.innerHTML = createCardHTML(resource);
    resourceGrid.appendChild(card);

    requestAnimationFrame(() => {
      setTimeout(() => {
        card.classList.add('visible');
      }, index * 60);
    });
  });
}


/* ================================================
   7. FILTERING LOGIC
================================================ */
function filterAndSearch() {
  let filtered = RESOURCES;

  if (state.activeCategory !== 'all') {
    filtered = filtered.filter(r => r.category === state.activeCategory);
  }

  if (state.searchQuery !== '') {
    const query = state.searchQuery;
    filtered = filtered.filter(resource => {
      const text = [
        resource.name,
        resource.category,
        resource.description,
        resource.phone   || '',
        resource.address || '',
        resource.tags.join(' '),
      ].join(' ').toLowerCase();
      return text.includes(query);
    });
  }

  renderCards(filtered);
}


/* ================================================
   8. SEARCH BAR LOGIC
================================================ */
searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim().toLowerCase();
  state.searchQuery = query;
  searchClear.hidden = query.length === 0;
  filterAndSearch();
});

searchClear.addEventListener('click', () => {
  searchInput.value = '';
  state.searchQuery = '';
  searchClear.hidden = true;
  searchInput.focus();
  filterAndSearch();
});

resetSearch.addEventListener('click', () => {
  searchInput.value = '';
  state.searchQuery = '';
  searchClear.hidden = true;
  state.activeCategory = 'all';
  filterButtons.forEach(btn => {
    const isAll = btn.dataset.category === 'all';
    btn.classList.toggle('active', isAll);
    btn.setAttribute('aria-pressed', isAll ? 'true' : 'false');
  });
  filterAndSearch();
});


/* ================================================
   9. CATEGORY FILTER BUTTONS
================================================ */
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    state.activeCategory = button.dataset.category;
    filterButtons.forEach(btn => {
      btn.classList.remove('active');
      btn.setAttribute('aria-pressed', 'false');
    });
    button.classList.add('active');
    button.setAttribute('aria-pressed', 'true');
    filterAndSearch();
  });
});


/* ================================================
   10. FORM VALIDATION & SUBMISSION
================================================ */
function showFieldError(input, errorEl, message) {
  input.classList.add('is-invalid');
  errorEl.textContent = message;
}

function clearFieldError(input, errorEl) {
  input.classList.remove('is-invalid');
  errorEl.textContent = '';
}

function validateForm() {
  let isValid = true;
  let firstInvalidField = null;

  if (fieldResName.value.trim() === '') {
    showFieldError(fieldResName, errResName, 'Please enter the resource name.');
    isValid = false;
    firstInvalidField = firstInvalidField || fieldResName;
  } else {
    clearFieldError(fieldResName, errResName);
  }

  if (fieldResCategory.value === '') {
    showFieldError(fieldResCategory, errResCategory, 'Please select a category.');
    isValid = false;
    firstInvalidField = firstInvalidField || fieldResCategory;
  } else {
    clearFieldError(fieldResCategory, errResCategory);
  }

  const desc = fieldResDesc.value.trim();
  if (desc === '') {
    showFieldError(fieldResDesc, errResDesc, 'Please enter a description.');
    isValid = false;
    firstInvalidField = firstInvalidField || fieldResDesc;
  } else if (desc.length < 20) {
    showFieldError(fieldResDesc, errResDesc, 'Description must be at least 20 characters.');
    isValid = false;
    firstInvalidField = firstInvalidField || fieldResDesc;
  } else {
    clearFieldError(fieldResDesc, errResDesc);
  }

  const link = fieldResLink.value.trim();
  if (link !== '') {
    try {
      new URL(link);
      clearFieldError(fieldResLink, errResLink);
    } catch (_) {
      showFieldError(fieldResLink, errResLink, 'Please enter a valid URL (e.g. https://example.org)');
      isValid = false;
      firstInvalidField = firstInvalidField || fieldResLink;
    }
  } else {
    clearFieldError(fieldResLink, errResLink);
  }

  const email = fieldResEmail.value.trim();
  if (email === '') {
    showFieldError(fieldResEmail, errResEmail, 'Please enter your email address.');
    isValid = false;
    firstInvalidField = firstInvalidField || fieldResEmail;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showFieldError(fieldResEmail, errResEmail, 'Please enter a valid email address.');
    isValid = false;
    firstInvalidField = firstInvalidField || fieldResEmail;
  } else {
    clearFieldError(fieldResEmail, errResEmail);
  }

  if (firstInvalidField) firstInvalidField.focus();
  return isValid;
}

[fieldResName, fieldResCategory, fieldResDesc, fieldResLink, fieldResEmail].forEach(field => {
  field.addEventListener('input', () => {
    const errorEl = document.getElementById(field.id + 'Error');
    if (errorEl) clearFieldError(field, errorEl);
  });
});

resourceForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!validateForm()) return;
  resourceForm.hidden = true;
  formSuccess.hidden = false;
  formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

submitAnother.addEventListener('click', () => {
  resourceForm.reset();
  [fieldResName, fieldResCategory, fieldResDesc, fieldResLink, fieldResEmail].forEach(f => {
    f.classList.remove('is-invalid');
  });
  [errResName, errResCategory, errResDesc, errResLink, errResEmail].forEach(el => {
    el.textContent = '';
  });
  formSuccess.hidden = true;
  resourceForm.hidden = false;
});


/* ================================================
   11. SCROLL ANIMATIONS

   CRITICAL FIX:
   addRevealClasses() runs FIRST to add .reveal to
   all elements, THEN initScrollAnimations() sets
   up the observer so it can actually find them.

   Elements already in the viewport on load are
   made visible immediately via getBoundingClientRect.
================================================ */
function addRevealClasses() {
  document.querySelectorAll('.section-header').forEach(el => {
    el.classList.add('reveal');
  });

  document.querySelectorAll('.highlight-card').forEach((el, i) => {
    el.classList.add('reveal');
    if (i === 0) el.classList.add('reveal-delay-1');
    if (i === 1) el.classList.add('reveal-delay-2');
    if (i === 2) el.classList.add('reveal-delay-3');
  });

  const submitInfo = document.querySelector('.submit-section__info');
  if (submitInfo) submitInfo.classList.add('reveal');

  const formCard = document.querySelector('.form-card');
  if (formCard) {
    formCard.classList.add('reveal');
    formCard.classList.add('reveal-delay-2');
  }

  const ctaBanner = document.querySelector('.cta-banner__inner');
  if (ctaBanner) ctaBanner.classList.add('reveal');

  const dirControls = document.querySelector('.directory__controls');
  if (dirControls) dirControls.classList.add('reveal');
}

function initScrollAnimations() {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.05,
  });

  document.querySelectorAll('.reveal').forEach(el => {
    const rect = el.getBoundingClientRect();
    const inViewport = rect.top < window.innerHeight && rect.bottom > 0;
    if (inViewport) {
      // Already visible — animate immediately
      setTimeout(() => el.classList.add('is-visible'), 100);
    } else {
      // Off screen — observe and animate on scroll
      observer.observe(el);
    }
  });
}


/* ================================================
   12. BACK TO TOP BUTTON
================================================ */
function initBackToTop() {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTop.hidden = false;
      requestAnimationFrame(() => backToTop.classList.add('visible'));
    } else {
      backToTop.classList.remove('visible');
      setTimeout(() => {
        if (window.scrollY <= 400) backToTop.hidden = true;
      }, 300);
    }
  }, { passive: true });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}


/* ================================================
   13. STATS COUNTER ANIMATION
================================================ */
function initStatsCounter() {
  const total    = RESOURCES.length;
  const duration = 3000;
  let startTime  = null;

  function countUp(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    const eased    = 1 - Math.pow(1 - progress, 3);
    if (statTotal) statTotal.textContent = Math.floor(eased * total) + '+';
    if (progress < 1) {
      requestAnimationFrame(countUp);
    } else {
      if (statTotal) statTotal.textContent = total + '+';
    }
  }

  requestAnimationFrame(countUp);
}


/* ================================================
   14. ANCHOR LINKS
================================================ */
function initAnchorLinks() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', () => {
      mobileMenu.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.querySelector('i').className = 'ri-menu-line';
    });
  });
}


/* ================================================
   15. INITIALISATION

   ORDER IS CRITICAL:
   1. initDarkMode()       — theme before anything renders
   2. renderCards()        — populate the grid
   3. addRevealClasses()   — add .reveal to elements
   4. initScrollAnimations() — observe those elements
   5. everything else
================================================ */
function init() {
  initDarkMode();
  renderCards(RESOURCES);
  addRevealClasses();        // MUST come before initScrollAnimations
  initScrollAnimations();    // MUST come after addRevealClasses
  initBackToTop();
  initStatsCounter();
  initAnchorLinks();
}

document.addEventListener('DOMContentLoaded', init);